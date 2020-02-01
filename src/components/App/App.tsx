import React, { FunctionComponent } from "react";

import "./App.styl";
import { Heading } from "../Heading/Heading";
import { Keywords } from "../Keywords/Keywords";
import { Languages } from "../Languages/Languages";
import { Status } from "../Status/Status";
import { MinStars } from "../MinStars/MinStars";
import { LastUpdate } from "../LastUpdate/LastUpdate";
import { Results } from "../Results/Results";

/**
 * Root component
 */
export const App: FunctionComponent = () => (
	<main id="content">
		<Heading />

		<Keywords />

		<div
			id="container-filters"
			className="container container--content-fluid"
		>
			<LastUpdate />
			<MinStars />
			<Languages />
		</div>

		<Status />

		<Results />
	</main>
);
