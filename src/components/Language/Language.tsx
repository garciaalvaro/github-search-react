import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { className } from "../../utils";
import { isLanguageActive, updateLanguage } from "../../redux";

interface Props {
	language: Language;
}

/**
 * Language component
 */
export const Language: FunctionComponent<Props> = props => {
	const { language } = props;

	const is_active = useSelector<State, boolean>(state =>
		isLanguageActive(state, language)
	);

	const dispatch = useDispatch();

	return (
		<button
			onClick={() => dispatch(updateLanguage(language))}
			data-language={language}
			className={className([
				"btn",
				"btn--underlined",
				is_active ? "btn--is-active" : null
			])}
		>
			{language}
		</button>
	);
};
