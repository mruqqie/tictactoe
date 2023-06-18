import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({scores, player}) => {
    const {xScore, oScore} = scores
	return (
		<div className="scoreBoard">
			<div className={`scores ${player === true && "active"}`}>
				<p>Player X</p>
				<p>{xScore}</p>
			</div>
			<div className={`scores ${player === false && "active"}`}>
				<p>Player O</p>
				<p>{oScore}</p>
			</div>
		</div>
	);
};

export default ScoreBoard;
