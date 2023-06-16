import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
	const [mark, setMark] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState(Math.random() < 0.5);

	const handleClick = (boxIndex) => {
		const updatedBoard = mark.map((value, index) => {
			if (index === boxIndex) {
				return player === true ? "X" : "O";
			} else {
				return value;
			}
		});

		setMark(updatedBoard);
		setPlayer(!player);
	};

	return (
		<div className="App">
			<Board mark={mark} onClick={handleClick} />
		</div>
	);
}

export default App;
