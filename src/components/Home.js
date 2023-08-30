import React from "react";
import { Helmet } from "react-helmet-async";
import Card from "../components/Card.js";
import { Col, Row } from "antd";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>HomePage - Little Lemon</title>
				<meta name='description' content='Home Page of little lemon' />
				<meta name='og:description' content='Home Page of little lemon' />
				<meta name='og:title' content='Home Page' />
				<meta
					name='og:image'
					content='https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D'
				/>
			</Helmet>
			<main>
				<h1>HOME PAGE</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
					ullamcorper risus at consectetur. Sed cursus pharetra vulputate. Donec
					rutrum porttitor diam a venenatis. Suspendisse odio tortor, tincidunt
					sit amet vehicula in, molestie eget leo. Donec non velit varius,
					maximus nunc non, placerat odio. Sed dapibus rhoncus purus, et
					consequat lacus finibus sollicitudin. Pellentesque in eros finibus,
					faucibus leo et, semper orci. Mauris convallis aliquet magna vitae
					convallis. Ut et enim ultrices metus tempor suscipit. Aenean laoreet
					sapien in justo condimentum, sed fringilla turpis pulvinar. Duis sem
					neque, molestie quis finibus vel, euismod non purus. Sed vitae nunc
					vel tellus volutpat consequat quis quis sem. Curabitur elementum ac
					dolor ac vehicula. Nullam quis ipsum ut lectus vulputate tincidunt.
					Aenean sollicitudin tortor at tortor cursus, eget gravida mauris
					ultrices. Integer finibus enim turpis, eget fringilla odio aliquet ut.
				</p>

				<Row>
					<Col span={8}>
						<Card
							title='Cucumber Soup'
							description='This cool, refreshing cucumber soup from Andrew Zimmern gets tang and creaminess from Greek yogurt and big, summery flavor from lots of fresh herbs.'
							src='https://www.foodandwine.com/thmb/HEyCim1Ub0WKjSpop9l5UlK66HA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-cold-cucumber-soup-yogurt-and-dill-hero-02-19e5f8e4943f478f813c26a977e40a14.jpg'
						></Card>
					</Col>
					<Col span={8}>
						<Card
							title='Cheeseburger'
							description='This cool, refreshing cucumber soup from Andrew Zimmern gets tang and creaminess from Greek yogurt and big, summery flavor from lots of fresh herbs.'
							src='https://www.recipetineats.com/wp-content/uploads/2022/08/Double-cheeseburgers_0.jpg?resize=650,813'
						></Card>
					</Col>
					<Col span={8}>
						<Card
							title='Lemonade'
							description='This cool, refreshing cucumber soup from Andrew Zimmern gets tang and creaminess from Greek yogurt and big, summery flavor from lots of fresh herbs.'
							src='https://www.recipetineats.com/wp-content/uploads/2022/08/Double-cheeseburgers_0.jpg?resize=650,813'
						></Card>
					</Col>
				</Row>
			</main>
		</>
	);
};
export default HomePage;
