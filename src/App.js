import React from 'react';
import Navbar from './componets/Navbar';
import Header from './componets/Header';
import './App.css';
import Highlights from './componets/Highlights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Highlights />
    </div>
  );
}

export default App;
