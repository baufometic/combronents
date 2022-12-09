import React from "../../../ultradom/node_modules/@types/react";
import { render } from "@testing-library/react";
import { Div } from "./Components";
import { T_ComponentProps } from "./styling";

describe("Div Component", () => {
	let props: T_ComponentProps;

	beforeEach(() => {
		props = {
			id: "Div component is my name"
		};
	});

	const renderComponent = () => render(<Div { ...props } />);

	it("should have primary className with default props", () => {
		const { getByTestId } = renderComponent();
		const DivComponent = getByTestId("Div-component");

		expect(DivComponent).toHaveClass("Div-component-primary");
	});

	it("should have secondary className with theme set as secondary", () => {
		props.id = "fen";
		const { getByTestId } = renderComponent();
		const DivComponent = getByTestId("Div-component");

		expect(DivComponent).toHaveClass("Div-component-secondary");
	});
});