import React from "react";
import { Helmet } from "react-helmet-async";
import Card from "./Card";
import { Col, Row } from "antd";

const MenuPage = () => {
	return (
		<>
			<Helmet>
				<title>Little - Menu</title>
				<meta name='description' content='Menu Page of little lemon' />
				<meta name='og:description' content='Menu Page of little lemon' />
				<meta name='og:title' content='Menu Page' />
				<meta
					name='og:image'
					content='https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D'
				/>
			</Helmet>
			<main>
				<h1>Sales</h1>
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
				<h1>Burgers</h1>
				<Row>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
				</Row>
				<h1>Drinks</h1>
				<Row>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
				</Row>
				<h1>Special Items</h1>
				<Row>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
					<Col xs={24} xl={6}>
						<Card></Card>
					</Col>
				</Row>
			</main>
		</>
	);
};
export default MenuPage;
