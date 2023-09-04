import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import routeUrls from "./routes";
import { Button, Form, Input, Alert, Space } from "antd";

const Login = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function onFinish() {
		try {
			setError("");
			setLoading(true);
			await login(form.getFieldValue("email"), form.getFieldValue("password"));
			navigate(routeUrls.dashboard);
		} catch (e) {
			setError("Failed to log in");
		}
		setLoading(false);
	}

	return (
		<>
			{error && <Alert type='error' closable={true} message={error} />}
			<Form
				form={form}
				name='form_reservation'
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
				layout='vertical'
				onFinish={onFinish}
				style={{ maxWidth: 600, paddingTop: 25 }}
			>
				<Form.Item
					hasFeedback
					label='Email'
					name='email'
					rules={[
						{ required: true, message: "Required" },
						{ type: "email", message: "Invalid Email" },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Password'
					name='password'
					hasFeedback
					rules={[{ required: true, message: "Required" }, { type: "" }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						span: 12,
						offset: 6,
					}}
				>
					<Space>
						<Button type='primary' htmlType='submit' disabled={loading}>
							Login
						</Button>
						<Button htmlType='reset'>reset</Button>
					</Space>
				</Form.Item>
			</Form>
			Need an account? <Link to={routeUrls.signUp}>Sign Up</Link>
		</>
	);
};

export default Login;
