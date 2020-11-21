import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getStatus } from "@/redux";
import { getTextFromStatus } from "./getTextFromStatus";
import { Message } from "../Message";

/**
 * Status component
 */
export const Status: FunctionComponent = () => {
	const status = useSelector<State, StateUi["status"]>(state =>
		getStatus(state)
	);

	const [text, setText] = useState(getTextFromStatus(status));

	useEffect(() => {
		setText(getTextFromStatus(status));
	}, [status]);

	return (
		<div id="container-status" className="container">
			<Message text={text} />
		</div>
	);
};
