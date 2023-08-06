import React, { useState } from "react";
import "./Register.css"

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<div>
			<form className="regForm">
				<div className="register">Register</div>
				<div className="input">
					<label className="regLabel">Email</label>
					<input
						className="regInput"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="input">
					<label className="regLabel">Password</label>
					<input
						className="regInput"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="input">
					<label className="regLabel">Confirm Password</label>
					<input
						className="regInput"
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
					/>
				</div>
				<button className="regButton" type="submit">Register</button>
				<div className="reg">Registered? Click here to <span>log in</span>.</div>
			</form>
		</div>
	);
};

export default Register;
