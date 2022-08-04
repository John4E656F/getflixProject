import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'



function App() {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;