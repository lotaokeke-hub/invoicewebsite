import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApiDocumentation from './pages/ApiDocumentation';
import Quickstart from './pages/Quickstart';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api-documentation" element={<ApiDocumentation />} />
          <Route path="/quickstart" element={<Quickstart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;