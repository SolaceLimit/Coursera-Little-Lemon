import React, { useState } from "react";
import {
	Button,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Space,
	TimePicker,
	message,
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const ReservationPage: React.FC = () => {
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();
	const [componentSize, setComponentSize] = useState<SizeType | "default">(
		"default"
	);

	const onFormLayoutChange = ({ size }: { size: SizeType }) => {
		if (size) setComponentSize(size);
	};

	const onFinish = () => {
		messageApi.open({
			type: "success",
			content: "Your reservation has been submitted",
		});
		form.resetFields();
	};

	return (
		<>
			{contextHolder}
			<Form
				form={form}
				name='form_reservation'
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				onFinish={onFinish}
				initialValues={{ size: componentSize, guests: 1 }}
				onValuesChange={onFormLayoutChange}
				size={componentSize as SizeType}
				style={{ maxWidth: 600, paddingTop: 25 }}
			>
				<Form.Item label='Form Size' name='size'>
					<Radio.Group>
						<Radio.Button value='small'>Small</Radio.Button>
						<Radio.Button value='default'>Default</Radio.Button>
						<Radio.Button value='large'>Large</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Name'
					name='name'
					rules={[{ required: true, message: "Need a name for reservation" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Date'
					name='date'
					hasFeedback
					rules={[{ required: true, message: "Need date for reservation" }]}
				>
					<DatePicker format={"MM/DD/YYYY"} style={{ width: "100%" }} />
				</Form.Item>

				<Form.Item
					label='Time'
					name='time'
					hasFeedback
					rules={[{ required: true, message: "Need time for reservation" }]}
				>
					<TimePicker format={"hh:mm a"} />
				</Form.Item>

				<Form.Item label='Guests' name='guests'>
					<InputNumber min={1} max={10} />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						span: 12,
						offset: 6,
					}}
				>
					<Space>
						<Button type='primary' htmlType='submit'>
							Make Reservation
						</Button>
						<Button htmlType='reset'>reset</Button>
					</Space>
				</Form.Item>
			</Form>
		</>
	);
};

export default ReservationPage;
