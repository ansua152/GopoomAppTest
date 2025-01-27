import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '블라블라';

  return (
    <div className="App">
      <div className="black-nav">
        <div>Reservation System</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;
