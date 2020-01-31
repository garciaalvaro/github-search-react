import React, { FunctionComponent } from "react";

import { Language } from "../Language/Language";

const languages: Language[] = [
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
	"Objective-C",
	"Java",
	"Ruby",
	"Python",
	"PHP",
	"C#"
];

/**
 * Languages component
 */
export const Languages: FunctionComponent = () => (
	<div className="container container--content-fluid">
		{languages.map(language => (
			<Language key={language} language={language} />
		))}
	</div>
);
