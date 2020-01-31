import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import "./Results.styl";
import { getRepositoriesIds, getRepositoriesFound } from "../../redux";
import { Message } from "../Message/Message";
import { Repository } from "../Repository/Repository";
import { Pagination } from "../Pagination/Pagination";

/**
 * Results component
 */
export const Results: FunctionComponent = () => {
	const repositories_found = useSelector<
		State,
		StateUi["repositories_found"]
	>(state => getRepositoriesFound(state));

	const repositories_ids = useSelector<State, StateUi["repositories_ids"]>(
		state => getRepositoriesIds(state)
	);

	return (
		<div
			id="container-results"
			className="container container--content-column"
		>
			{!!repositories_ids.length && (
				<Message
					tag="H3"
					text={`${repositories_found.toLocaleString()} repositor${
						repositories_found > 1 ? "ies" : "y"
					} found`}
				/>
			)}

			<ul className="list">
				{repositories_ids.map(id => (
					<Repository key={id} id={id} />
				))}
			</ul>

			<Pagination />
		</div>
	);
};
