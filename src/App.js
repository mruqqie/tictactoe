import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import Reset from "./components/reset/Reset";

function App() {
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
	const [gameOver, setGameOver] = useState(false)

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
				setGameOver(true)
			} else {
				let { xScore } = scores;
				if (gameOver === false) {
					xScore += 1;
				}
				setScores({ ...scores, xScore });
				setGameOver(true)
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

			if (board[x] === board[y] && board[y] === board[z]) {
				
				return board[x];
			}
		}
		return null;
	};

	const resetBoard = () => {
		setGameOver(false)
		setMark(Array(9).fill(null))
	}

	return (
		<div className="App">
			<ScoreBoard scores={scores} player={player} />
			<Board mark={mark} onClick={handleClick} />
			<Reset reset={resetBoard}/>
		</div>
	);
}

export default App;
