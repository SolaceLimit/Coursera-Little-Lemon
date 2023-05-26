import { render, screen } from "@testing-library/react";
import ReservationPage from "../Reservation";
import { HelmetProvider } from "react-helmet-async";

test("Navigate to Home Page", () => {
	render(
		<HelmetProvider>
			<ReservationPage />
		</HelmetProvider>
	);

	const element = screen.getByText(/ReservationPage/i);

	expect(element).toBeInTheDocument();
});
