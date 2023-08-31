import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ContactPage from "./Contact";
import MenuPage from "./Menu";
import AboutPage from "./About";
import UnderContructionPage from "./UnderContruction";
import routeUrls from "./routes";

const Content = () => {
	return (
		<Layout.Content style={{}}>
			<Routes>
				<Route path={routeUrls.home} element={<HomePage />}></Route>
				<Route path={routeUrls.menu} element={<MenuPage />}></Route>
				<Route path={routeUrls.about} element={<AboutPage />}></Route>
				<Route
					path={routeUrls.reservation}
					element={<UnderContructionPage />}
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
