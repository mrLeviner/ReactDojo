import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialTitlePanel from './MaterialTitlePanel';
import './assets/styles/styles.css';

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
    verticalAlign: 'middle'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Appointments() {
  return (
    <div>
      <h2>Doctor's Appointments</h2>
    </div>
  );
}

function Journal() {
  return (
    <div>
      <h2>Journal Entries</h2>
    </div>
  );
}

function Questions() {
  return (
    <div>
      <h2>Questions</h2>
    </div>
  );
}

function Classes() {
  return (
    <div>
      <h2>Class Schedule</h2>
    </div>
  );
}

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <Router>
        <div style={styles.content}>
          <Link to="/" style={styles.sidebarLink}>
            Home
          </Link>
          <div style={styles.divider} />
          <Link to="/apppointments" style={styles.sidebarLink}>
            Doctor's Appointment
          </Link>
          <Link to="/journal" style={styles.sidebarLink}>
            Journal Entries
          </Link>
          <Link to="/questions" style={styles.sidebarLink}>
            Questions
          </Link>
          <Link to="/classes" style={styles.sidebarLink}>
            Class Schedule
          </Link>

          <Route exact path="/" component={Home} />
          <Route path="/apppointments" component={Appointments} />
          <Route path="/journal" component={Journal} />
          <Route path="/questions" component={Questions} />
          <Route path="/classes" component={Classes} />
        </div>
      </Router>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
