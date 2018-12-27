import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Typist from 'react-typist';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SidebarContent';
import Countdown from './Countdown';
import prettymomma from './assets/images/pretty_momma.png';
// import heartbeat from './assets/images/heartbeat.jpeg';
import './assets/styles/App.scss';
import './assets/styles/styles.css';

const mql = window.matchMedia(`(min-width: 1400px)`);
const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    float: 'right',
    verticalAlign: 'middle'
  },
  content: {
    // padding: '16px'
  }
};

/*
  - Run npm-home {package-name} to view the package homepage. Add -g to view
    the GitHub page. Ex: npm-home lodash, npm-home lodash -g
  - Force linter to ignore a line by adding // eslint-disable-line after it.
 */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open: open });
  }

  mediaQueryChanged() {
    this.setState({ docked: mql.matches, open: false });
  }

  toggleOpen(event) {
    this.setState({ open: !this.state.open });

    if (event) {
      event.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        <span>Sullivan Raye Leviner</span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="https://github.com/balloob/react-sidebar"
            style={styles.contentHeaderMenuLink}>
            <div class="bm-burger-button">
              <span>
                <span class="bm-burger-bars" />
                <span class="bm-burger-bars" />
                <span class="bm-burger-bars" />
              </span>
              <button>Open Menu</button>
            </div>
          </a>
        )}
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
      pullRight: true
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div id="app" className="App" style={styles.content}>
            <div id="page-wrap">
              <header className="App-header">
                <img src={prettymomma} className="App-logo " alt="logo" />
                {/* <img src={prettymomma} className="App-logo pulse" alt="logo" /> */}
                {/* <img
                  src={heartbeat}
                  className="App-heartbeat"
                  alt="heartbeat"
                /> */}
                <div className="title">
                  <Typist>
                    <em>
                      The due date for Baby Leviner is May 31, 2019! The
                      countdown is on and she will arrive in...
                    </em>
                  </Typist>
                </div>
                <Countdown date={`2019-05-31T00:00:00`} />
              </header>
            </div>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default App;
