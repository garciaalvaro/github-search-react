import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import "./Results.styl";
import { getRepositoriesIds, getRepositoriesFound } from "@/redux";
import { Message } from "../Message/Message";
import { Repository } from "../Repository";
import { Pagination } from "../Pagination";

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

	if (!repositories_ids.length) {
		return null;
	}

	const text = `${repositories_found.toLocaleString()} repositor${
		repositories_found > 1 ? "ies" : "y"
	} found`;

	return (
		<div
			id="container-results"
			className="container container--content-column"
		>
			<Message tag="H3" text={text} />

			<ol className="list">
				{repositories_ids.map(id => (
					<li key={id}>
						<Repository id={id} />
					</li>
				))}
			</ol>

			<Pagination />
		</div>
	);
};
