import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Breadcrumb, Layout, Menu, theme } from "antd";

function App() {
	return (
		<Layout style={{}}>
			<Header />
			<Content />
			<Footer />
		</Layout>
	);
}

export default App;
