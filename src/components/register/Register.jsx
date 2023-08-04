import React, { useState } from "react";
import "./Register.css";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<div>
			<form className="form">
				<div className="register">Register</div>
				<div className="input">
					<label>Email</label>
					<input
						type="email"
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
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="input">
					<label>Confirm Password</label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
					/>
				</div>
				<button type="submit">Register</button>
				<div className="reg">Registered? Click to <span>log in</span>.</div>
			</form>
		</div>
	);
};

export default Register;
