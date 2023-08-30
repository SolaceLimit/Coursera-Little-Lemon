import React from "react";
import { Layout, theme } from "antd";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ContactPage from "./Contact";
import ReservationPage from "./Reservation";
import UnderContructionPage from "./UnderContruction";
import routeUrls from "./routes";

const Content = () => {
	return (
		<Layout.Content style={{ paddingLeft: "5vh" }}>
			<Routes>
				<Route path={routeUrls.home} element={<HomePage />}></Route>
				<Route
					path={routeUrls.reservation}
					element={<ReservationPage />}
				></Route>
				<Route path={routeUrls.contact} element={<ContactPage />}></Route>
				<Route
					path={routeUrls.underContruction}
					element={<UnderContructionPage />}
				></Route>
			</Routes>
		</Layout.Content>
	);
};
export default Content;
