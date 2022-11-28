import React from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddArticle from "./components/Article/AddArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add_article' element={<AddArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
