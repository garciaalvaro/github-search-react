import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";

import { Language } from "../../src/components/Language";
import { generateStore } from "../../src/redux";
import { setFetchMock } from "../../src/utils";

setFetchMock();

const Dummy = () => null;
let store = generateStore();

describe("Language", () => {
	let wrapper: ReactWrapper = mount(<Dummy />);

	beforeEach(() => {
		store = generateStore();

		wrapper = mount(
			<Provider store={store}>
				<Language language="TypeScript" />
			</Provider>
		);
	});

	it("should render without throwing an error", () => {
		expect(wrapper.find("button").length).toBe(1);
	});

	it("should add the is-active class on click", () => {
		wrapper.find("button").simulate("click");

		wrapper.setProps({});

		expect(wrapper.find("button").is(".btn--is-active")).toBe(true);
	});

	it("should remove the is-active class on second click", () => {
		wrapper.find("button").simulate("click");
		wrapper.find("button").simulate("click");

		wrapper.setProps({});

		expect(wrapper.find("button").is(".btn--is-active")).toBe(false);
	});

	it("should remove the is-active class when other button is clicked", () => {
		const wrapper_other = mount(
			<Provider store={store}>
				<Language language="PHP" />
			</Provider>
		);

		wrapper.find("button").simulate("click");
		wrapper_other.find("button").simulate("click");

		wrapper.setProps({});
		wrapper_other.setProps({});

		expect(wrapper.find("button").is(".btn--is-active")).toBe(false);

		expect(wrapper_other.find("button").is(".btn--is-active")).toBe(true);
	});

	it("should remove the is-active class when other button is clicked, twice", () => {
		const wrapper_other = mount(
			<Provider store={store}>
				<Language language="PHP" />
			</Provider>
		);

		wrapper.find("button").simulate("click");
		wrapper_other.find("button").simulate("click");
		wrapper.find("button").simulate("click");

		wrapper.setProps({});
		wrapper_other.setProps({});

		expect(wrapper.find("button").is(".btn--is-active")).toBe(true);

		expect(wrapper_other.find("button").is(".btn--is-active")).toBe(false);
	});
});
