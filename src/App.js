import React, { Component } from 'react';
// import { TypedReactDemo } from './Typed.js';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <img src={heartbeat} className="App-heartbeat" alt="heartbeat" />
          {/* <TypedReactDemo
            strings={[
              'Some <i>strings</i> are slanted',
              'Some <strong>strings</strong> are bold',
              'HTML characters &times; &copy;'
            ]}
          />, */}
          <p>
            Round 1: First edits made to <code>src/App.js</code>.
          </p>
          {/* rel=noopener & rel=noreferrer
              https://developers.google.com/web/tools/lighthouse/audits/noopener */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
