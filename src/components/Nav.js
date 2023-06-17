import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import ContactPage from "./Contact";
import ReservationPage from "./Reservation";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const items = [
	{
		label: (
			<Link to='/' className='nav-item'>
				Home
			</Link>
		),
		key: "alipay",
		icon: <AppstoreOutlined />,
	},
	{
		label: (
			<Link to='/reservation' className='nav-item'>
				Reservation
			</Link>
		),
		key: "alipay",
		icon: <AppstoreOutlined />,
	},
	{
		label: (
			<Link to='/contact' className='nav-item'>
				Contact
			</Link>
		),
		key: "alipay",
		icon: <AppstoreOutlined />,
	},
];

const Nav = () => {
	return (
		<>
			<nav>
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={["2"]}
					items={items}
				/>
			</nav>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/reservation' element={<ReservationPage />}></Route>
				<Route path='/contact' element={<ContactPage />}></Route>
			</Routes>
		</>
	);
};
export default Nav;
