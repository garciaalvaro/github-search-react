import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import "./Repository.styl";
import { getRepository } from "../../redux";
import { IconStar } from "../../utils";

interface Props {
	id: Repository["id"];
}

/**
 * Repository component
 */
export const Repository: FunctionComponent<Props> = props => {
	const { id } = props;

	const {
		url,
		description,
		name,
		user,
		stars,
		language,
		updated,
		license
	} = useSelector<State, Repository>(state => getRepository(state, id));

	return (
		<article className="item">
			<header>
				<h4>
					<a href={url} className="item__link">
						{user} / {name}
					</a>
				</h4>
			</header>

			<section className="item__body">
				<p>{description}</p>
			</section>

			<footer className="container container--content-fluid">
				<div className="item__stars">
					<IconStar />

					<span>{stars}</span>
				</div>

				<span className="item__language">{language}</span>

				<span className="item__license">{license}</span>

				<span className="item__updated">{updated}</span>
			</footer>
		</article>
	);
};
