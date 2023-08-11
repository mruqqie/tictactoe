import React from "react";
import "./Welcome.css";

const Welcome = () => {
	return (
		<div className="welcome">
			<button className="welcomeButton" onClick={null}>Login</button>
			<button className="welcomeButton" onClick={null}>Play as a guest</button>
      <h4></h4>
		</div>
	);
};

export default Welcome;
