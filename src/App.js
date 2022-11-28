import React from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userAdd from "./components/users/userAdd";


function App() {
  return (
    <div className="App">
      < Navbar />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/useradd' element={<userAdd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
