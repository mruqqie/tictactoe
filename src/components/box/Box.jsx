import React from "react";
import "./Box.css"

const Box = ({value, onClick}) => {
    const val = value === "X" ? "box x" : "box o"
	return (
		<div>
			<button className={val} onClick={onClick}>{value}</button>
		</div>
	);
};

export default Box;
