import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IconSearch } from "../../utils";
import { getKeywords, updateKeywords, fetchRepositories } from "../../redux";

/**
 * Keywords component
 */
export const Keywords: FunctionComponent = () => {
	const keywords = useSelector<State, StateUi["keywords"]>(state =>
		getKeywords(state)
	);

	const dispatch = useDispatch();

	return (
		<div
			id="container-search"
			className="container container--content-centered theme-dark"
		>
			<div className="container search search--big">
				<label htmlFor="search__input" className="search__label">
					Search
				</label>

				<input
					value={keywords}
					onChange={e => {
						dispatch(updateKeywords(e.target.value));

						dispatch(fetchRepositories({ throttle_time: 1000 }));
					}}
					id="search__input"
					className="search__input"
					type="text"
					placeholder="Search repositories..."
				/>

				<button className="search__button btn btn--icon">
					<IconSearch />
				</button>
			</div>
		</div>
	);
};
