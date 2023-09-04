import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form, Input } from "antd";
import routeUrls from "./routes";

const Dashboard = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			navigate(routeUrls.login);
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
			{error && <Alert type='error'>{error}</Alert>}
			<Form>
				<Form.Item
					label='Email'
					name={"email"}
					initialValue={currentUser?.email}
				>
					<Input readOnly={true} />
				</Form.Item>
			</Form>
			<Link to='/update-profile'></Link>
			<Button variant='link' onClick={handleLogout}>
				Log Out
			</Button>
		</>
	);
};

export default Dashboard;
