import Pwf from "./components/playtype/Pwf";
import Pwc from "./components/playtype/Pwc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/">
						<Route path="/tictactoe/playwfriend" element={<Pwf />} />
						<Route path="/tictactoe" element={<Pwc />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
