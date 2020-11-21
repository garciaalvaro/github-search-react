import React, { FunctionComponent, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import { getTextFromStatus } from "@/utils";
import { getStatus } from "@/redux";
import { Message } from "../Message";

/**
 * Status component
 */
export const Status: FunctionComponent = () => {
	const status = useSelector<State, StateUi["status"]>(state =>
		getStatus(state)
	);

	const [text, setText] = useState(getTextFromStatus(status));

	useLayoutEffect(() => {
		setText(getTextFromStatus(status));
	}, [status]);

	return (
		<div id="container-status" className="container">
			<Message text={text} />
		</div>
	);
};
