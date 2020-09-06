import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      你点击了<span id="value">0</span>次
          <div>
            <button id="add1">+1</button>
            <button id="add2">+2</button>
            <button id="add1IfOdd">如果是单数就+1</button>
            <button id="add1After2Sec">两秒钟后+1</button>
          </div>
    </div>
  );
}

export default App;
