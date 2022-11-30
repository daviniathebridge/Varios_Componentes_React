
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main.js'
import React from 'react';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar /> 
        <Main />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
