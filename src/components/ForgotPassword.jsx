import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button, Form, Input, Space, Alert } from "antd";

const ForgotPassword = () => {
	const [form] = Form.useForm();

	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function onFinish() {
		try {
			setError("");
			setLoading(true);
			await resetPassword(form.getFieldValue("email"));
			setMessage("Check your inbox for further instructions");
		} catch (e) {
			setError("Failed to log in");
		}
		setLoading(false);
	}

	return (
		<>
			{error && <Alert type='error'>{error}</Alert>}
			{message && <Alert type='success'>{message}</Alert>}
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
					wrapperCol={{
						span: 12,
						offset: 6,
					}}
				>
					<Space>
						<Button type='primary' htmlType='submit' disabled={loading}>
							Reset Password
						</Button>
					</Space>
				</Form.Item>
				<Space>
					<Link to='/login'>Log In</Link>
					Need an account? <Link to='/SignUp'>Sign Up</Link>
				</Space>
			</Form>
		</>
	);
};

export default ForgotPassword;
