import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../box/Box";
import Reset from "../reset/Reset";
import ScoreBoard from "../scoreBoard/ScoreBoard";
import chatIcon from "../../imgs/chaticon.svg";
import "./Pwc.css";

const Pwf = () => {
	const navigate = useNavigate();

	const [search, setSearch] = useState("");
	const [mark, setMark] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState(Math.random() < 0.5);
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
	const [gameOver, setGameOver] = useState(false);

	const handleClick = (boxIndex) => {
		const updatedBoard = mark.map((value, index) => {
			if (index === boxIndex) {
				return player === true ? "X" : "O";
			} else {
				return value;
			}
		});

		const winner = checkWinner(updatedBoard);
		if (winner) {
			if (winner === "O") {
				let { oScore } = scores;
				if (gameOver === false) {
					oScore += 1;
				}
				setScores({ ...scores, oScore });
				setGameOver(true);
			} else {
				let { xScore } = scores;
				if (gameOver === false) {
					xScore += 1;
				}
				setScores({ ...scores, xScore });
				setGameOver(true);
			}
		}

		if (gameOver === false) {
			setMark(updatedBoard);
			setPlayer(!player);
		}
	};

	const checkWinner = (board) => {
		for (let i = 0; i < winConditions.length; i++) {
			const [x, y, z] = winConditions[i];

			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				return board[x];
			}
		}
		return null;
	};

	const resetBoard = () => {
		setGameOver(false);
		setMark(Array(9).fill(null));
		setPlayer(Math.random() < 0.5);
	};

	const handlePwcClick = () => {
		navigate("/")
	}

	return (
		<div>
			<div className="search--poffline">
				<form className="searchForm">
					<input
						className="searchInput"
						placeholder="Search for a friend"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						value={search}
					/>
					<button className="sendReq" type="submit">
						Send request
					</button>
				</form>
				<button className="playOffline" onClick={handlePwcClick}>Play with computer</button>
			</div>
			<div className="score--reset">
				<ScoreBoard scores={scores} player={player} />
				<Reset reset={resetBoard} />
			</div>
			<div className="board">
				{mark.map((value, index) => {
					return (
						<Box
							value={value}
							onClick={() => value === null && handleClick(index)}
						/>
					);
				})}
			</div>
			<div className="req--chat">
				<button className="req">Requests</button>
				<button className="chat">
					<div>Chat</div>
					<img className="chatIcon" src={chatIcon} />
				</button>
			</div>
		</div>
	);
};

export default Pwf;
