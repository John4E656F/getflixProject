import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import 'bootstrap/dist/css/bootstrap.css';


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