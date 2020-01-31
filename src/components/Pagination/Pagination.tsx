import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	getPage,
	getRepositoriesFound,
	fetchRepositories,
	updatePage
} from "../../redux";

const results_per_page = 30;

/**
 * Pagination component
 */
export const Pagination: FunctionComponent = () => {
	const repositories_found = useSelector<
		State,
		StateUi["repositories_found"]
	>(state => getRepositoriesFound(state));

	const page = useSelector<State, StateUi["page"]>(state => getPage(state));

	const dispatch = useDispatch();

	if (repositories_found <= results_per_page) {
		return null;
	}

	return (
		<nav>
			<span>Page {page}</span>

			<button
				onClick={() => {
					dispatch(updatePage(page - 1));

					dispatch(fetchRepositories({ throttle_time: 1000 }));
				}}
				id="prev"
				className="btn btn--text btn--filled"
				disabled={page === 1}
			>
				Prev
			</button>

			<button
				onClick={() => {
					dispatch(updatePage(page + 1));

					dispatch(fetchRepositories({ throttle_time: 1000 }));
				}}
				id="next"
				className="btn btn--text btn--filled"
				disabled={repositories_found <= page * results_per_page}
			>
				Next
			</button>
		</nav>
	);
};
