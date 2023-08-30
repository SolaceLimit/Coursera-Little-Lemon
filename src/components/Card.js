import React from "react";
import { Card as CardInterface } from "antd";

const { Meta } = CardInterface;

const Card = (props) => {
	return (
		<CardInterface
			hoverable='true'
			style={{
				width: props.width || 240,
			}}
			cover={
				<img
					height={props.height || 200}
					alt={props.alt || "alt"}
					src={
						props.src ||
						"https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
					}
				/>
			}
		>
			<Meta
				title={props.title || "title"}
				description={props.description || "description"}
			/>
		</CardInterface>
	);
};

export default Card;
