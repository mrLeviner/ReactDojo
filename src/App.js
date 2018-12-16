import React, { Component } from 'react';
// https://github.com/jstejada/react-typist
import Typist from 'react-typist';
import Countdown from './Countdown.js';
import prettymomma from './images/pretty_momma.png';
import heartbeat from './images/heartbeat.jpeg';
import './App.scss';
import './styles.css';
import './fonts/font-awesome-4.2.0/css/font-awesome.min.css';
// import SideBar from './sidebar';
// import SemanticSidebar from './SemanticSidebar.js';

// Force linter to ignore a line by adding the comment // eslint-disable-line after it.

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        {/* <SemanticSidebar /> */}
        {/* <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} /> */}
        <div id="page-wrap">
          <header className="App-header">
            <img src={prettymomma} className="App-logo pulse" alt="logo" />
            <img src={heartbeat} className="App-heartbeat" alt="heartbeat" />
            <div className="title">
              <Typist>
                <em>
                  The due date for Baby Leviner is May 31, 2019! The countdown
                  is on and she will arrive in...
                </em>
              </Typist>
            </div>
            <Countdown date={`2019-05-31T00:00:00`} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
