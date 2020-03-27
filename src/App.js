import React from 'react';
import './App.css';
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h3>Home</h3>
      </header>
      <div className='main-section'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
