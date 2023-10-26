import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Layout } from "antd";
import React from "react";

function App() {
	return (
		<Layout
			style={{
				backgroundColor: "white",
				maxWidth: 1200,
				margin: "auto",
			}}
		>
			<Header />
			<Content />
			<Footer />
		</Layout>
	);
}

export default App;
