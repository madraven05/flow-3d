import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Flow3D from "./pages/flow-3d";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" Component={Flow3D} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
