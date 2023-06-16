import React from "react";
import "./Board.css"
import Box from "../box/Box";

const Board = () => {
	return (
		<div className="board">
			<Box value="O" />
			<Box value="X" />
			<Box value="O" />
			<Box value="X" />
			<Box value="O" />
			<Box value="X" />
			<Box value="O" />
			<Box value="X" />
			<Box value="O" />
		</div>
	);
};

export default Board;
