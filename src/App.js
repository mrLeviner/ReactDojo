import React, { Component } from 'react';
import Countdown from './Countdown.js';
import prettymomma from './pretty_momma.png';
import heartbeat from './heartbeat.jpeg';
import './App.scss';
import './styles.css';
import './fonts/font-awesome-4.2.0/css/font-awesome.min.css';
// import SideBar from './sidebar';
import SemanticSidebar from './SemanticSidebar.js';

/* If the use of global variables defined in script tags in html files
  is desired, you can circumvent the linter by reading the variable
  explicitly from the window object (ex: const $ = window.$;).
  Alternatively, you can force the linter to ignore any line by adding
  the comment // eslint-disable-line after it. */

class App extends Component {
  render() {
    return <div id="app" className="App">
        <SemanticSidebar />
        {/* <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} /> */}
        <div id="page-wrap">
          <header className="App-header">
            <img src={ prettymomma } className="App-logo" alt="logo" /> {/* pulse */}
            <img src={ heartbeat } className="App-heartbeat" alt="heartbeat" />
            <div className="title">
              <em>Baby Leviner is due on May 31, 2019, in only</em>
            </div>
            <Countdown date={`2019-05-31T00:00:00`} />
          </header>
        </div>
      </div>;
  }
}

export default App;
