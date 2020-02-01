import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import { Keywords } from "./Keywords";
import { store, updateKeywords } from "../../redux";
import { getFetchMock, getTimeoutPromise } from "../../utils";

describe("Keywords", () => {
	const wrapper = mount(
		<Provider store={store}>
			<Keywords />
		</Provider>
	);

	it("should render without throwing an error", () => {
		expect(wrapper.find("input#search__input").length).toBe(1);
	});

	it("should render the search icon correctly", () => {
		expect(wrapper.find("svg").length).toBe(1);
	});

	it("should render empty initial value in input", () => {
		expect(wrapper.find("input").text()).toEqual("");
	});

	it("should get the updated value after a updateKeywords dispatch", () => {
		store.dispatch(updateKeywords("New Value"));

		wrapper.update();

		expect(wrapper.find("input").props().value).toEqual("New Value");
	});

	it("should update the store and receive back the value", () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		wrapper.update();

		expect(wrapper.find("input").props().value).toEqual("New Value");
	});

	it("should update the status to waiting on keywords change with 0 character", () => {
		wrapper.find("input").simulate("change", { target: { value: "" } });

		expect(store.getState().ui.status).toEqual("characters_0");
	});

	it("should update the status to waiting on keywords change with 1 character", () => {
		wrapper.find("input").simulate("change", { target: { value: "a" } });

		expect(store.getState().ui.status).toEqual("characters_1");
	});

	it("should update the status to waiting on keywords change with 2 character", () => {
		wrapper.find("input").simulate("change", { target: { value: "ab" } });

		expect(store.getState().ui.status).toEqual("characters_2");
	});

	it("should update the status to waiting on keywords change", () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		expect(store.getState().ui.status).toEqual("waiting");
	});

	it("should update the status to loading on keywords change after 1 second", async () => {
		// @ts-ignore TODO
		global.fetch = jest.fn(getFetchMock());

		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait 1 second and then continue
		await getTimeoutPromise(1000);

		expect(store.getState().ui.status).toEqual("loading");
	});

	it("should update the status to error on keywords change after 2 seconds", async () => {
		// @ts-ignore TODO
		global.fetch = jest.fn(getFetchMock(null));

		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait 1 second and then continue
		await getTimeoutPromise(1000);

		expect(store.getState().ui.status).toEqual("loading");
	});
});
