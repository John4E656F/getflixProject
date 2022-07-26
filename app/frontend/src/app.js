import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./routing";


// Import main sass file to apply global styles
// import "./App.scss";


function App() {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;