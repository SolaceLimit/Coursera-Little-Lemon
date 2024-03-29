import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ContactPage from "./Contact";
import MenuPage from "./Menu";
import AboutPage from "./About";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import ReservationPage from "./Reservation";
import UnderContructionPage from "./UnderContruction";
import routeUrls from "./routes";
import Login from "./Login";

const Content = () => {
	return (
		<Layout.Content style={{}}>
			<Routes>
				<Route path={routeUrls.home} element={<HomePage />}></Route>
				<Route path={routeUrls.menu} element={<MenuPage />}></Route>
				<Route path={routeUrls.about} element={<AboutPage />}></Route>
				<Route
					path={routeUrls.reservation}
					element={<ReservationPage />}
				></Route>
				<Route path={routeUrls.signUp} element={<SignUp />}></Route>
				<Route path={routeUrls.login} element={<Login />}></Route>
				<Route path={routeUrls.dashboard} element={<Dashboard />}></Route>
				<Route
					path={routeUrls.updateProfile}
					element={<UpdateProfile />}
				></Route>
				<Route
					path={routeUrls.forgotPassword}
					element={<ForgotPassword />}
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
