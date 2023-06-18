import React from "react";
import "./Reset.css"

const Reset = ({reset}) => {
	return (
		<div className="reset">
			<button className="button" onClick={reset}>Reset</button>
		</div>
	);
};

export default Reset;
