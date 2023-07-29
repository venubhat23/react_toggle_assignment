import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundLight, setIsBackgroundLight] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBackgroundLight((prevState) => !prevState);
  };

  return (
    <div className={`App ${isBackgroundLight ? 'light' : 'dark'}`}>
      <header className="App-header">
        <h1>Background Color Toggle</h1>
        <button onClick={toggleBackgroundColor}>
          Toggle Background Color
        </button>
      </header>
    </div>
  );
}

export default App;
