import React, { Component } from 'react';
import Countdown from './Countdown.js';
import prettymomma from './pretty_momma.png';
import heartbeat from './heartbeat.jpeg';
import './App.scss';

/* If the use of global variables defined in script tags in html files
  is desired, you can circumvent the linter by reading the variable
  explicitly from the window object (ex: const $ = window.$;).
  Alternatively, you can force the linter to ignore any line by adding
  the comment // eslint-disable-line after it. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={prettymomma} className="App-logo pulse" alt="logo" />
          <img src={heartbeat} className="App-heartbeat" alt="heartbeat" />
          <div className="title">
            <em>Baby Leviner is ON THE WAY!!!</em>
          </div>
          <Countdown date={`2019-04-30T00:00:00`} />
        </header>
      </div>
    );
  }
}

export default App;
