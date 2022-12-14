import React from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddArticle from "./components/Article/AddArticle";
import EditArticle from "./components/Article/EditArticle";
import ViewArticle from "./components/Article/ViewArticle";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add_article' element={<AddArticle />} />
          <Route path='/editarticle/:idarticle' element={<EditArticle />} />
          <Route path='/viewarticle/:idarticle' element={< ViewArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
