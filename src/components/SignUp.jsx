import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button, Form, Input, message, Space } from "antd";

const SignUp = () => {
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();

	const { signup, currentUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

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
			form.resetFields();
		} catch (e) {
			messageApi.open({
				type: "error",
				content: "Failed to Sign Up User",
			});
			setError("Failed to Sign Up User");
		}

		setLoading(false);
	}

	return (
		<>
			{contextHolder}
			{error}
			{currentUser?.email}
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
