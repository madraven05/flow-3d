import "./App.css";
import Home from "./pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Flow3D from "./pages/flow-3d";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/flow-3d" Component={Flow3D} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
