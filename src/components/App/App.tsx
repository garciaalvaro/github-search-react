import React, { FunctionComponent } from "react";

import "./App.styl";
import { Heading } from "../Heading";
import { Keywords } from "../Keywords";
import { Languages } from "../Languages";
import { Status } from "../Status";
import { MinStars } from "../MinStars";
import { LastUpdate } from "../LastUpdate";
import { Results } from "../Results";

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
