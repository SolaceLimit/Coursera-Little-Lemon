import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import * as types from "@firebase/auth-types";

type AuthContextType = {
	currentUser: types.User | null;
	login: (
		email: string,
		password: string
	) => Promise<types.UserCredential | void>;
	signup: (
		email: string,
		password: string
	) => Promise<types.UserCredential | void>;
	logout: () => Promise<void>;
	resetPassword: (email: string) => Promise<void>;
	updateEmail: (email: string) => Promise<void> | undefined;
	updatePassword: (email: string) => Promise<void> | undefined;
};

const AuthContext = React.createContext<AuthContextType>({
	currentUser: null,
	login: (_email: string, _password: string) => Promise.resolve(),
	signup: (_email: string, _password: string) => Promise.resolve(),
	logout: () => Promise.resolve(),
	resetPassword: (_email: string) => Promise.resolve(),
	updateEmail: (_email: string) => Promise.resolve(),
	updatePassword: (_password: string) => Promise.resolve(),
});

export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<types.User | null>(null);
	const [loading, setLoading] = useState(true);

	function signup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email: string, password: string) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email: string) {
		return auth.sendPasswordResetEmail(email);
	}

	function updateEmail(email: string) {
		return currentUser?.updateEmail(email);
	}

	function updatePassword(password: string) {
		return currentUser?.updatePassword(password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value: AuthContextType = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
