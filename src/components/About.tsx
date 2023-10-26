import React from "react";
import { Helmet } from "react-helmet-async";
import { Image } from "antd";

const AboutPage = () => {
	return (
		<>
			<Helmet>
				<title>About - Little Lemon</title>
				<meta name='description' content='ContactPage of little lemon' />
				<meta name='og:description' content='ContactPage of little lemon' />
				<meta name='og:title' content='ContactPage' />
				<meta
					name='og:image'
					content='https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D'
				/>
			</Helmet>
			<main>
				<h1>about us</h1>
				<Image
					width={200}
					src='https://www.48hourslogo.com/oss/works/2022/01/13/21255711641/115168_45900_fc8ca08f-43ca-45b0-9147-3c86b3eb880a.jpg'
				/>
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
			</main>
		</>
	);
};
export default AboutPage;
