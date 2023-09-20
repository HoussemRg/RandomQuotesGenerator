import React from 'react';
import './App.css';

function App() {
  return (
    <div className="quotes">
      <h1 className="title">Quote Of Today</h1>
      <div className="quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, nisi!</div>
      <div className="author">author</div>
      <div className="quote-footer">
        <div className="icons">
          <div className="icon1">cxwcw</div>
          <div className="icon2">xcx</div>
          <div className="icon3">qsdq</div>
        </div>
        <button className="btn btn-primary">Generate</button>
      </div>
    </div>
  );
}

export default App;
