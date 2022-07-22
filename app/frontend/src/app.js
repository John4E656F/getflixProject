import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";

import "swiper/swiper-bundle.min.css";

// Import main sass file to apply global styles
// import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;