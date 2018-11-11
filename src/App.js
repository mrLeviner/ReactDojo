import React, { Component } from 'react';
import logo from './logo.svg';
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
          <p>
            Round 1: First edits made to <code>src/App.js</code>.
          </p>
          {/* rel=noopener & rel=noreferrer
              https://developers.google.com/web/tools/lighthouse/audits/noopener */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
