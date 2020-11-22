import React, { FunctionComponent } from "react";

import "./Languages.styl";
import { Language } from "../Language";

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
	"C#",
];

/**
 * Languages component
 */
export const Languages: FunctionComponent = () => (
	<div id="languages" className="container container--content-fluid">
		{languages.map(language => (
			<Language key={language} language={language} />
		))}
	</div>
);
