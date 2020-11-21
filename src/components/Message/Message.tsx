import React, { FunctionComponent } from "react";

interface Props {
	text: string;
	tag?: "H1" | "H2" | "H3" | "H4" | "SPAN" | "P";
}

/**
 * Message component
 */
export const Message: FunctionComponent<Props> = props => {
	const { tag, text } = props;

	if (!text) return null;

	switch (tag) {
		case "H1":
			return <h1>{text}</h1>;

		case "H2":
			return <h2>{text}</h2>;

		case "H3":
			return <h3>{text}</h3>;

		case "H4":
			return <h4>{text}</h4>;

		case "SPAN":
			return <span>{text}</span>;

		default:
			return <p>{text}</p>;
	}
};
