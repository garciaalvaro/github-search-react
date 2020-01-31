import { Middleware } from "redux";

import {
	fetchRepositoriesCompleted,
	fetchRepositoriesFailed
} from "../actions";
import { prepareRepository, getUrl } from "../../utils";

interface FetchedData {
	items: RepositoryRaw[];
	items_found: number;
}

export const fetchRepositories: Middleware<{}, State> = ({
	getState
}) => next => async (action: Actions) => {
	if (action.type !== "FETCH_REPOSITORIES") {
		return next(action);
	}

	next(action);

	const url = getUrl(getState().ui);

	// Fetch the data
	const response = await fetch(url).catch(() => {
		next(fetchRepositoriesFailed(false));
	});

	if (!response || !response.ok) {
		const too_many_requests = !!(response && response.status === 403);

		return next(fetchRepositoriesFailed(too_many_requests));
	}

	const {
		items: repositories_raw,
		items_found: repositories_found
	}: FetchedData = await response.json();

	const { obj, ids } = repositories_raw.reduce<{
		obj: StateRepositories;
		ids: StateUi["repositories_ids"];
	}>(
		({ obj, ids }, repository) => ({
			obj: {
				...obj,
				[repository.id]: prepareRepository(repository)
			},
			ids: [...ids, repository.id]
		}),
		{ obj: {}, ids: [] }
	);

	return next(
		fetchRepositoriesCompleted({
			repositories: obj,
			repositories_ids: ids,
			repositories_found
		})
	);
};
