// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import routeUrls from "./routes";
// import { useAuth } from "../contexts/AuthContext";

// interface PrivateRouteProps {
// 	component: React.FC<any>;
// 	[key: string]: any;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
// 	component: Component,
// 	...rest
// }) => {
// 	const { currentUser } = useAuth();
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props: any) => {
// 				return currentUser ? (
// 					<Component {...props} />
// 				) : (
// 					<Navigate to={routeUrls.login} />
// 				);
// 			}}
// 		/>
// 	);
// };

// export default PrivateRoute;
