import React, { FunctionComponent } from "react";

import "./App.styl";
import { Heading } from "../Heading/Heading";
import { Keywords } from "../Keywords/Keywords";
import { Status } from "../Status/Status";

/**
 * Root component
 */
export const App: FunctionComponent = () => (
	<main id="content">
		<Heading />
		<Keywords />
		<Status />
	</main>
);
