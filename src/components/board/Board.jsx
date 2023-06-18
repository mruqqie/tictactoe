import React from "react";
import "./Board.css"
import Box from "../box/Box";

const Board = ({mark, onClick}) => {
	return (
		<div className="board">
			{mark.map((value, index) => {
				return <Box value={value} onClick={() => value === null && onClick(index)} />
			})}
		</div>
	);
};

export default Board;
