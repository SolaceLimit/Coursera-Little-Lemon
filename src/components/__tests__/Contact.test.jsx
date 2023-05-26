import { render, screen } from "@testing-library/react";
import ContactPage from "../Contact";
import { HelmetProvider } from "react-helmet-async";

test("Navigate to Home Page", () => {
	render(
		<HelmetProvider>
			<ContactPage />
		</HelmetProvider>
	);

	const element = screen.getByText(/ContactPage/i);

	expect(element).toBeInTheDocument();
});
