import React, { FunctionComponent } from "react";

import "./App.styl";
import { Heading } from "../Heading/Heading";
import { Keywords } from "../Keywords/Keywords";
import { Languages } from "../Languages/Languages";
import { Status } from "../Status/Status";
import { LastUpdate } from "../LastUpdate/LastUpdate";

/**
 * Root component
 */
export const App: FunctionComponent = () => (
	<main id="content">
		<Heading />
		<Keywords />
		<Languages />
		<Status />
		<LastUpdate />
	</main>
);
