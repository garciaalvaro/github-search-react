import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import { Languages, languages } from "@/components/Languages";
import { generateStore } from "@/redux";

const getElements = () => {
	const store = generateStore();

	const wrapper = render(
		<Provider store={store}>
			<Languages />
		</Provider>
	);

	return {
		store,
		wrapper,
	};
};

test("Languages: renders all languages with aria-pressed false", async () => {
	const { wrapper } = getElements();

	languages.forEach(language => {
		expect(
			wrapper
				.getByRole("button", { name: language })
				.getAttribute("aria-pressed")
		).toBe("false");
	});
});

test("Languages: toggles aria-pressed value on click", async () => {
	const { wrapper } = getElements();
	const $button = wrapper.getByRole("button", { name: "JavaScript" });

	fireEvent.click($button);
	expect($button.getAttribute("aria-pressed")).toBe("true");

	fireEvent.click($button);
	expect($button.getAttribute("aria-pressed")).toBe("false");
});
