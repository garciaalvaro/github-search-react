import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import { wait, fetchMock, repositories_0, repositories_2 } from "./utils";
import { App } from "@/components/App";
import { generateStore } from "@/redux";

const getElements = () => {
	const store = generateStore();

	const wrapper = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	return {
		store,
		wrapper,
	};
};

test("App: should update the status text, fetch data and render the results", async () => {
	fetchMock(repositories_2);

	const { wrapper } = getElements();
	const $input = wrapper.getByRole("textbox") as HTMLInputElement;
	const $status = wrapper.getByTestId("status");

	// Initial state
	expect($input.value).toBe("");
	expect($status.textContent).toBe(
		"Enter some text in the search field above"
	);
	expect(wrapper.queryAllByRole("article")).toHaveLength(0);

	// Start typing a repository name in the input
	fireEvent.change($input, { target: { value: "r" } });
	expect($status.textContent).toBe("Enter 2 more characters");

	fireEvent.change($input, { target: { value: "re" } });
	expect($status.textContent).toBe("Enter 1 more character");

	fireEvent.change($input, { target: { value: "rea" } });
	expect($status.textContent).toBe("Waiting...");

	// Wait for the throttle to finish
	await wait(1000);

	expect($status.textContent).toBe("Loading...");

	// Fetch the data
	await wait(100);

	expect($status.textContent).toBe("");
	expect(wrapper.getAllByRole("article").length).toBe(2);
});

test("App: should update the status text, fetch data and render when there are no results", async () => {
	fetchMock(repositories_0);

	const { wrapper } = getElements();
	const $input = wrapper.getByRole("textbox") as HTMLInputElement;
	const $status = wrapper.getByTestId("status");

	fireEvent.change($input, { target: { value: "rea" } });

	// Wait for the throttle to finish
	await wait(1000);

	expect($status.textContent).toBe("Loading...");

	// Fetch the data
	await wait(100);

	expect($status.textContent).toBe("No results");
	expect(wrapper.queryAllByRole("article")).toHaveLength(0);
});
