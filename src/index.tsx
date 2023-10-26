import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const helmetContext = {};
root.render(
	<React.StrictMode>
		<HelmetProvider context={helmetContext}>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
