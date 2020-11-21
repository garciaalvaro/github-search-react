import { Middleware } from "redux";

import {
	fetchRepositoriesCompleted,
	fetchRepositoriesFailed,
} from "../actions";
import { prepareRepository, getUrl } from "../../utils";

/**
 * This middleware will fetch the data from the GitHub API
 */
export const fetchRepositories: Middleware<{}, State> = ({
	getState,
}) => next => async (action: Actions) => {
	if (action.type !== "FETCH_REPOSITORIES") {
		return next(action);
	}

	next(action);

	const { ui } = getState();
	const { fetch_id } = ui;
	const url = getUrl(ui);

	// Fetch the data
	const response = await fetch(url).catch(() => {
		next(fetchRepositoriesFailed(false));
	});

	const { fetch_id: fetch_id_latest } = getState().ui;

	// If the id is not the latest one, return. This could happen
	// if a new timeout was triggered before this fetch resolved.
	if (fetch_id_latest !== fetch_id) return;

	if (!response || !response.ok) {
		const too_many_requests = !!(response && response.status === 403);

		return next(fetchRepositoriesFailed(too_many_requests));
	}

	const {
		items: repositories_raw,
		total_count: repositories_found,
	}: FetchedData = await response.json();

	const { obj, ids } = repositories_raw.reduce<{
		obj: StateRepositories;
		ids: StateUi["repositories_ids"];
	}>(
		({ obj, ids }, repository) => ({
			obj: {
				...obj,
				[repository.id]: prepareRepository(repository),
			},
			ids: [...ids, repository.id],
		}),
		{ obj: {}, ids: [] }
	);

	return next(
		fetchRepositoriesCompleted({
			repositories: obj,
			repositories_ids: ids,
			repositories_found,
		})
	);
};
