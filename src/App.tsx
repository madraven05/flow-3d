import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
      <Navbar/>
    </div>
  );
}

export default App;
