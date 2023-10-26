import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import routeUrls from "./routes";
import { Button, Form, Input, Alert, Space } from "antd";

const UpdateProfile = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function onFinish() {
		if (
			form.getFieldValue("password") !== form.getFieldValue("passwordConfirm")
		) {
			return setError("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setError("");
		if (form.getFieldValue("email") !== currentUser?.email) {
			promises.push(updateEmail(form.getFieldValue("email")));
		}
		if (form.getFieldValue("password")) {
			promises.push(updatePassword(form.getFieldValue("password")));
		}

		Promise.all(promises)
			.then(() => {
				navigate(routeUrls.dashboard);
			})
			.catch((e) => {
				console.log(e);
				setError("Failed to update account");
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<>
			{error && <Alert type='error' closable={true} message={error} />}
			<Form
				form={form}
				name='form_update_profile'
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
					initialValue={currentUser?.email}
					rules={[
						{ required: true, message: "Required" },
						{ type: "email", message: "Invalid Email" },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='Password' name='password' hasFeedback>
					<Input.Password placeholder='Leave blank to keep same password' />
				</Form.Item>
				<Form.Item label='Confirm Password' name='passwordConfirm' hasFeedback>
					<Input.Password placeholder='Leave blank to keep same password' />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						span: 12,
						offset: 6,
					}}
				>
					<Space>
						<Button type='primary' htmlType='submit' disabled={loading}>
							Update Profile
						</Button>
					</Space>
				</Form.Item>
			</Form>
			Remembered Password<Link to={routeUrls.login}>Log in</Link>
		</>
	);
};

export default UpdateProfile;
