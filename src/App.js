import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
