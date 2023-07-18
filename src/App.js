import { useState, useEffect } from "react";
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
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		if (!gameOver && player) {
			const updatedBoard = computerMove(mark);
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
		}
	}, [player, mark, scores, gameOver]);

	const handleClick = (boxIndex) => {
		if (!player && !gameOver) {
			const updatedBoard = mark.map((value, index) => {
				if (index === boxIndex) {
					return "O";
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
		}
	};

	// const handleClick = (boxIndex) => {
	// 	const updatedBoard = mark.map((value, index) => {
	// 		if (index === boxIndex) {
	// 			return player === true ? "X" : "O";
	// 		} else {
	// 			return value;
	// 		}
	// 	});

	// 	const winner = checkWinner(updatedBoard);
	// 	if (winner) {
	// 		if (winner === "O") {
	// 			let { oScore } = scores;
	// 			if (gameOver === false) {
	// 				oScore += 1;
	// 			}
	// 			setScores({ ...scores, oScore });
	// 			setGameOver(true);
	// 		} else {
	// 			let { xScore } = scores;
	// 			if (gameOver === false) {
	// 				xScore += 1;
	// 			}
	// 			setScores({ ...scores, xScore });
	// 			setGameOver(true);
	// 		}
	// 	}

	// 	if (gameOver === false) {
	// 		setMark(updatedBoard);
	// 		setPlayer(!player);
	// 	}
	// };

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
		setPlayer(Math.random() < 0.5)
	};

	const computerMove = (board) => {
		let bestScore = -Infinity;
		let bestMove;
		let oppWinMove = null;

		for (let move of possibleMoves(board)) {
			const newBoard = makeMove(board, move, "X");


			if (checkOppBoutToWin(newBoard, "X")) {
				oppWinMove = checkOppBoutToWin(newBoard, "X");
			} else {
				const score = minimax(newBoard, 0, false);

				if (score > bestScore) {
					bestScore = score;
					bestMove = move;
				}
			}
		}

		if (checkOppBoutToWin(board, "O")) {
			return makeMove(board, checkOppBoutToWin(board, "O"), "X")
		} else if (oppWinMove !== null) {
			return makeMove(board, oppWinMove, "X")
		} else {
			return makeMove(board, bestMove, "X")
		}
	};

	const checkOppBoutToWin = (board, player) => {
		for (let i = 0; i < winConditions.length; i++) {
			const [x, y, z] = winConditions[i];

			if (
				board[x] &&
				board[x] === board[y] &&
				board[x] !== player &&
				board[z] === null
			) {
				return z;
			}
		}

		return null;
	};

	const minimax = (board, depth, maximizingPlayer) => {
		const winner = checkWinner(board);
		if (winner !== null) {
			return evaluate(winner, depth);
		}

		if (maximizingPlayer) {
			let maxScore = -Infinity;
			for (let move of possibleMoves(board)) {
				const newBoard = makeMove(board, move, "X");
				const score = minimax(newBoard, depth + 1, false);
				maxScore = Math.max(maxScore, score);
			}
			return maxScore;
		} else {
			let minScore = Infinity;
			for (let move of possibleMoves(board)) {
				const newBoard = makeMove(board, move, "O");
				const score = minimax(newBoard, depth + 1, true);
				minScore = Math.min(minScore, score);
			}
			return minScore;
		}
	};

	const evaluate = (winner, depth) => {
		if (winner === "X") {
			return 10 - depth;
		} else if (winner === "O") {
			return depth - 10;
		} else {
			return 0;
		}
	};

	const possibleMoves = (board) => {
		return board
			.map((value, index) => {
				if (value === null) {
					return index;
				}
				return null;
			})
			.filter((move) => move !== null);
	};

	const makeMove = (board, move, player) => {
		return board.map((value, index) => {
			if (index === move) {
				return player;
			} else {
				return value;
			}
		});
	};

	return (
		<div className="App">
			<ScoreBoard scores={scores} player={player} />
			<Board mark={mark} onClick={handleClick} />
			<Reset reset={resetBoard} />
		</div>
	);
}

export default App;
