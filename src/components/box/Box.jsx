import React from "react";
import "./Box.css"

const Box = ({value}) => {
    const val = value === "X" ? "box x" : "box o"
	return (
		<div>
			<button className={val}>{value}</button>
		</div>
	);
};

export default Box;
