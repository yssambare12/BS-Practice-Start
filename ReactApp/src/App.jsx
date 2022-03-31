import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componants/Home/Home";
import Login from "./Componants/LandingPage/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
