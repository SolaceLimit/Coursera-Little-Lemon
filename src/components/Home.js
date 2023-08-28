import React from "react";
import { Helmet } from "react-helmet-async";

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
				<p>
					Cras ultrices odio eget bibendum porta. Nullam id nisl a nulla mattis
					luctus. Vivamus lacinia felis nec nisl ultrices rutrum. Nulla
					consequat maximus fringilla. Quisque finibus nisl eget rhoncus cursus.
					Maecenas hendrerit suscipit tincidunt. Maecenas mollis eu eros
					malesuada varius. Cras mattis malesuada sodales. Integer eget leo sed
					ligula dapibus egestas. Nullam libero nisi, sodales at sem in, posuere
					hendrerit diam. Praesent maximus eget metus et gravida. Praesent
					tincidunt arcu diam, vitae vestibulum tortor dignissim ac. Curabitur
					vulputate in mi dignissim egestas. Nullam at nisi magna. Suspendisse
					condimentum dictum orci, eu volutpat justo volutpat nec.
				</p>
				<p>
					Quisque euismod, massa in elementum tempus, odio dolor rutrum sapien,
					id ornare dui odio varius risus. Cras eget efficitur enim. Morbi nibh
					justo, sollicitudin et sapien ut, sodales laoreet dolor. Vivamus id
					rhoncus velit. Curabitur ac ligula a nunc dictum aliquam eu eget erat.
					Nulla facilisi. Integer in accumsan nisi, eu euismod nunc. Praesent
					mattis, ante in facilisis lacinia, neque mi fringilla orci, dictum
					dapibus arcu est a nulla. Nulla dolor libero, tincidunt a sapien at,
					semper facilisis tortor. Integer erat ante, ornare ac leo ut, rutrum
					laoreet tellus. Duis ac nibh a enim vestibulum scelerisque. Nam id
					dictum metus. Ut tincidunt accumsan sodales. Donec lacinia maximus
					eros id egestas. Etiam et tellus egestas, condimentum felis ac, mattis
					arcu.
				</p>
			</main>
		</>
	);
};
export default HomePage;
