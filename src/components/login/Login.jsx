import React, { useState } from "react";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<form className="loginForm">
				<div className="login">Login</div>
				<div className="input">
					<label className="loginLabel">Email</label>
					<input
						className="loginInput"
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="input">
					<label className="loginLabel">Password</label>
					<input
						className="loginInput"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button className="loginButton" type="submit" onClick={null}>
					Login
				</button>
				<div className="reg">Not registered? Click here to <span>sign up</span>.</div>
			</form>
		</div>
	);
};

export default Login;
