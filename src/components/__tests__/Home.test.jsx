import { render, screen } from "@testing-library/react";
import Homepage from "../Home";
import { HelmetProvider } from "react-helmet-async";

test("Navigate to Home Page", () => {
	render(
		<HelmetProvider>
			<Homepage />
		</HelmetProvider>
	);

	const element = screen.getByText(/HOME PAGE/i);

	expect(element).toBeInTheDocument();
});
