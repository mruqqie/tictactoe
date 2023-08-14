import Pwf from "./components/playtype/Pwf";
import Pwc from "./components/playtype/Pwc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter basename="/tictactoe">
				<Routes>
					<Route path="/">
						<Route path="/playwfriend" element={<Pwf />} />
						<Route path="/" element={<Pwc />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
