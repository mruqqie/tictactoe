import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/board/Board";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";
import Reset from "./components/reset/Reset";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Welcome from "./components/welcome/Welcome";
import Pwc from "./components/pwc/Pwc";

function App() {
	return (
		<div className="App">
			{/* <ScoreBoard scores={scores} player={player} />
			< mark={mark} onClick={handleClick} />
			<Reset reset={resetBoard} /> */}
			<Pwc/>
		</div>
	);
}

export default App;
