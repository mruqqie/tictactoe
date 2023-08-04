import React, { useState } from "react";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<form className="form">
				<div className="login">Login</div>
				<div className="input">
					<label>Email</label>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="input">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button type="submit" onClick={null}>
					Login
				</button>
				<div className="reg">Not registered? Click to <span>sign up</span>.</div>
			</form>
		</div>
	);
};

export default Login;
