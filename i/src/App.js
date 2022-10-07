import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Home from "./Components/Home";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="To Dos list" About="About" />
        {/* <Routes>
          <Route path="/about" element={<About />} />

          <Route
            path="/"
            element={<TextForm heading="Enter your text to analyeze" />}
          />

          <Route path="/"></Route>
        </Routes> */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <TodoItem /> */}
    </>
  );
}

export default App;
