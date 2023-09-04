import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import routeUrls from "./routes";
import { Button, Form, Input, Alert, Space } from "antd";

const SignUp = () => {
	const [form] = Form.useForm();

	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function onFinish() {
		if (
			form.getFieldValue("password") !== form.getFieldValue("passwordConfirm")
		) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(form.getFieldValue("email"), form.getFieldValue("password"));
			navigate(routeUrls.login);
		} catch (e) {
			setError("Failed to Sign Up User");
		}
		setLoading(false);
	}

	return (
		<>
			{error && <Alert type='error'>{error}</Alert>}
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
					label='Confirm Password'
					name='passwordConfirm'
					hasFeedback
					rules={[{ required: true, message: "Required" }]}
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
							Sign Up
						</Button>
						<Button htmlType='reset'>reset</Button>
					</Space>
				</Form.Item>
			</Form>
			Already have an account? <Link to='/login'>Log In</Link>
		</>
	);
};

export default SignUp;
