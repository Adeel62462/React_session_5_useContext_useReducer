import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext';

function App() {
  var counter = useState(0);
  return (
    <counterContext.Provider value={counter}>
      <div>
        <Parent></Parent>
      </div>
    </counterContext.Provider>
  );
}

export default App;
