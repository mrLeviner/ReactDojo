import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/styles.css';
import xIcon from './assets/images/chevron-right.svg';

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",' +
      'Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: '300'
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '0 16px',
    fontSize: '1.5em',
    textAlign: 'left',
    minHeight: '30px',
    maxHeight: '30px',
    width: '100%'
  }
};

const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>
        <a>
          <span className="bm-cross-button" />
          {/* <img src={xIcon} alt="Close Sidebar" /> */}
        </a>
        {props.title}
      </div>
      <div style={styles.header}>
        <a href="/" class="bm-cross-button" />
      </div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
};

export default MaterialTitlePanel;
