import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import ContactPage from "./Contact";
import ReservationPage from "./Reservation";
import UnderContructionPage from "./UnderContruction";
import { Menu } from "antd";
import * as Icons from "@ant-design/icons";

const routeUrls = {
	home: "/",
	reservation: "/reservation",
	contact: "/contact",
	underContruction: "/UnderContruction",
};

const items = [
	{
		label: (
			<Link to={routeUrls.home} className='nav-item'>
				Home
			</Link>
		),
		key: "Home",
		icon: <Icons.HomeOutlined />,
	},
	{
		label: (
			<Link to={routeUrls.underContruction} className='nav-item'>
				About
			</Link>
		),
		key: "About",
		icon: <Icons.QuestionOutlined />,
	},
	{
		label: (
			<Link to={routeUrls.underContruction} className='nav-item'>
				Menu
			</Link>
		),
		key: "Menu",
		icon: <Icons.MenuOutlined />,
	},
	{
		label: (
			<Link to='/reservation' className='nav-item'>
				Reservation
			</Link>
		),
		key: "Reservation",
		icon: <Icons.CalendarOutlined />,
	},
	{
		label: (
			<Link to={routeUrls.underContruction} className='nav-item'>
				Online Order
			</Link>
		),
		key: "Online-Order",
		icon: <Icons.DollarOutlined />,
	},
	{
		label: (
			<Link to={routeUrls.underContruction} className='nav-item'>
				Login
			</Link>
		),
		key: "Login",
		icon: <Icons.LoginOutlined />,
	},
	{
		label: (
			<Link to='/contact' className='nav-item'>
				Contact
			</Link>
		),
		key: "Contact",
		icon: <Icons.ContactsOutlined />,
	},
];

const Nav = () => {
	return (
		<>
			<nav>
				<Menu mode='horizontal' inlineCollapsed='true' items={items} />
			</nav>

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
		</>
	);
};
export default Nav;
