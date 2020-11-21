import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";

import { Status, getTextFromStatus } from "../../src/components/Status";
import { generateStore, updateKeywords } from "../../src/redux";
import { getTimeoutPromise, setFetchMock } from "../../src/utils";

setFetchMock();

const Dummy = () => null;
let store = generateStore();

describe("Status", () => {
	let wrapper: ReactWrapper = mount(<Dummy />);

	beforeEach(() => {
		store = generateStore();

		wrapper = mount(
			<Provider store={store}>
				<Status />
			</Provider>
		);
	});

	it("should render without throwing an error", () => {
		expect(wrapper.find("#container-status").length).toBe(1);
	});

	it("should render the initial store status: characters_0", () => {
		expect(wrapper.text()).toEqual(getTextFromStatus("characters_0"));
	});

	it("should render the updated store status: characters_0", async () => {
		store.dispatch(updateKeywords("a"));
		store.dispatch(updateKeywords(""));

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.text()).toEqual(getTextFromStatus("characters_0"));
	});

	it("should render the updated store status: characters_1", async () => {
		store.dispatch(updateKeywords("a"));

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.text()).toEqual(getTextFromStatus("characters_1"));
	});

	it("should render the updated store status: characters_2", async () => {
		store.dispatch(updateKeywords("ab"));

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.text()).toEqual(getTextFromStatus("characters_2"));
	});

	it("should render the updated store status: error", async () => {
		// Make fetch throw an error
		setFetchMock(() => new Promise((res, reject) => reject()));

		store.dispatch(updateKeywords("New Value"));

		// Wait for the fetch throttle
		await getTimeoutPromise(1100);

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.text()).toEqual(getTextFromStatus("error"));

		// Reset the default mock
		setFetchMock();
	});

	it("should render the updated store status: no_results", async () => {
		store.dispatch(updateKeywords("New Value"));

		// Wait for the fetch throttle
		await getTimeoutPromise(1100);

		// Re-render the component
		wrapper.setProps({});

		expect(wrapper.text()).toEqual(getTextFromStatus("no_results"));
	});
});
