import React from 'react';
import './App.css';
import Header from "./components/Header";
import { Router } from 'express';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>Test</div>
      </div>
    </Router>
  );
}

export default App;