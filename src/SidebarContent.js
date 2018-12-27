import React from 'react';
import PropTypes from 'prop-types';
import MaterialTitlePanel from './MaterialTitlePanel';

const styles = {
  sidebar: {
    width: '256px',
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
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

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const linksText = [
    "Doctor's Appointments",
    'Journal Entries',
    'Questions',
    'Class Schedule'
  ];

  const links = [];

  for (let index = 0; index < linksText.length; index++) {
    links.push(
      <a
        key={index}
        href="https://github.com/balloob/react-sidebar"
        style={styles.sidebarLink}>
        {linksText[index]}
      </a>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a
          href="https://github.com/balloob/react-sidebar"
          style={styles.sidebarLink}>
          Home
        </a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
