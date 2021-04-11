import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import { Keywords } from "@/components/Keywords";
import { Status } from "@/components/Status";
import { generateStore } from "@/redux";
import { wait, fetchMock, repositories_0 } from "./utils";

const getElements = () => {
	const store = generateStore();

	const wrapper = render(
		<Provider store={store}>
			<Keywords />
			<Status />
		</Provider>
	);

	return {
		store,
		wrapper,
	};
};

test("Status: renders the text according the the input state", async () => {
	fetchMock(repositories_0);

	const { wrapper } = getElements();
	const $input = wrapper.getByRole("textbox") as HTMLInputElement;
	const $status = wrapper.getByTestId("status");

	expect($status.textContent).toBe(
		"Enter some text in the search field above"
	);

	fireEvent.change($input, { target: { value: "r" } });
	expect($status.textContent).toBe("Enter 2 more characters");

	fireEvent.change($input, { target: { value: "re" } });
	expect($status.textContent).toBe("Enter 1 more character");

	fireEvent.change($input, { target: { value: "rea" } });
	expect($status.textContent).toBe("Waiting...");

	await wait(1000);

	expect($status.textContent).toBe("Loading...");

	await wait(100);

	expect($status.textContent).toBe("No results");

	fireEvent.change($input, { target: { value: "" } });
	expect($status.textContent).toBe(
		"Enter some text in the search field above"
	);
});
