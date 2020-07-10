import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";

import { Keywords } from "../../src/components/Keywords/Keywords";
import { generateStore, updateKeywords } from "../../src/redux";
import { getFetchMock, getTimeoutPromise, setFetchMock } from "../../src/utils";

setFetchMock();

const Dummy = () => null;
let store = generateStore();

describe("Keywords", () => {
	let wrapper: ReactWrapper = mount(<Dummy />);

	beforeEach(() => {
		store = generateStore();

		wrapper = mount(
			<Provider store={store}>
				<Keywords />
			</Provider>
		);
	});

	it("should render without throwing an error", () => {
		expect(wrapper.find("input#search__input").length).toBe(1);
	});

	it("should render the search icon correctly", () => {
		expect(wrapper.find("svg").length).toBe(1);
	});

	it("should render empty initial value in input", () => {
		expect(wrapper.find("input").text()).toEqual("");
	});

	it("should get the updated value after a updateKeywords dispatch", async () => {
		store.dispatch(updateKeywords("New Value"));

		// Wait for the fetch throttle
		await getTimeoutPromise();

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.find("input").props().value).toEqual("New Value");
	});

	it("should update the store and receive back the value", async () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait for the fetch throttle
		await getTimeoutPromise();

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.find("input").props().value).toEqual("New Value");
	});

	it("should update the status to waiting on keywords change with 0 character", async () => {
		wrapper.find("input").simulate("change", { target: { value: "" } });

		// Wait for the fetch throttle
		await getTimeoutPromise();

		expect(store.getState().ui.status).toEqual("characters_0");
	});

	it("should update the status to waiting on keywords change with 1 character", async () => {
		wrapper.find("input").simulate("change", { target: { value: "a" } });

		// Wait for the fetch throttle
		await getTimeoutPromise();

		expect(store.getState().ui.status).toEqual("characters_1");
	});

	it("should update the status to waiting on keywords change with 2 character", async () => {
		wrapper.find("input").simulate("change", { target: { value: "ab" } });

		// Wait for the fetch throttle
		await getTimeoutPromise();

		expect(store.getState().ui.status).toEqual("characters_2");
	});

	it("should update the status to waiting on keywords change", () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		expect(store.getState().ui.status).toEqual("waiting");
	});

	it("should update the status to loading on keywords change", async () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait for the fetch throttle
		await getTimeoutPromise();

		expect(store.getState().ui.status).toEqual("loading");
	});

	it("should update the status to error on keywords change", async () => {
		setFetchMock(() =>
			getFetchMock({
				ok: false,
				json: () => null
			})
		);

		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait for the fetch throttle
		await getTimeoutPromise(1100);

		expect(store.getState().ui.status).toEqual("error");

		// Reset the default mock. TODO: check better implementation
		setFetchMock();
	});

	it("should update the status to no_results on keywords change", async () => {
		wrapper
			.find("input")
			.simulate("change", { target: { value: "New Value" } });

		// Wait for the fetch throttle
		await getTimeoutPromise(1100);

		expect(store.getState().ui.status).toEqual("no_results");
	});
});
