import React from 'react';
import Navbar from './components/Navbar';
import SinglePage from './components/SinglePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="shimmer-particles"></div>
      <Navbar />
      <SinglePage />
    </div>
  );
}

export default App;
