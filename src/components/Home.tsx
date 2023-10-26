import React from "react";
import { Helmet } from "react-helmet-async";
import Card from "../components/Card";
import { Col, Row } from "antd";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Little Lemon</title>
				<meta name='description' content='Home Page of little lemon' />
				<meta name='og:description' content='Home Page of little lemon' />
				<meta name='og:title' content='Home Page' />
				<meta
					name='og:image'
					content='https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D'
				/>
			</Helmet>
			<main>
				<h1>Little Lemon</h1>
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

				<h3> SALES </h3>
				<Row>
					<Col xs={24} xl={6}>
						<Card
							title='Cucumber Soup 5.99'
							description='This cool, refreshing cucumber soup from Andrew Zimmern gets tang and creaminess from Greek yogurt and big, summery flavor from lots of fresh herbs.'
							src='https://www.foodandwine.com/thmb/HEyCim1Ub0WKjSpop9l5UlK66HA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-cold-cucumber-soup-yogurt-and-dill-hero-02-19e5f8e4943f478f813c26a977e40a14.jpg'
						></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card
							title='Cheeseburger 8.99'
							description='This cool, refreshing cucumber soup from Andrew Zimmern gets tang and creaminess from Greek yogurt and big, summery flavor from lots of fresh herbs.'
							src='https://www.recipetineats.com/wp-content/uploads/2022/08/Double-cheeseburgers_0.jpg?resize=650,813'
						></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card
							title='Lemonade 3.99'
							description='Is there anything that says “summer” more than a glass of sweet-but-tart lemonade? There’s nothing quite as good or refreshing as a glass of freshly squeezed lemonade.'
							src='https://bellyfull.net/wp-content/uploads/2022/05/Lemonade-blog-2.jpg'
						></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card
							title='white fish fillet 16.99'
							description='It’s a delicious and nutritious fish using firm white fish fillets. Pair with rice and vegetables for a healthy dinner.'
							src='https://www.chewoutloud.com/wp-content/uploads/2022/10/Easy-Lemon-Butter-Fish-Closeup-Vertical-780x1170.jpg'
						></Card>
					</Col>
				</Row>
			</main>
		</>
	);
};
export default HomePage;
