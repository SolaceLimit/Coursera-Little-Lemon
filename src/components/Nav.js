import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import * as Icons from "@ant-design/icons";
import routeUrls from "./routes";

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
			<Link to={routeUrls.about} className='nav-item'>
				About
			</Link>
		),
		key: "About",
		icon: <Icons.QuestionOutlined />,
	},
	{
		label: (
			<Link to={routeUrls.menu} className='nav-item'>
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
		<nav>
			<Menu theme='light' mode='horizontal' items={items} />
		</nav>
	);
};
export default Nav;
