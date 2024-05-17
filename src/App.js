import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Card from './pages/Cart.js'
import Home from './pages/Home.js';
function App() {
  return (
    <div className="App">
      <div className='bg-slate-900 fixed w-full z-20'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
