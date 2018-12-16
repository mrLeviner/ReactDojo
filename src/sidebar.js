import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// import '@fortawesome/fontawesome-free';
// import { findIconDefinition, dom, library, config, icon } from '@fortawesome/fontawesome-svg-core';
// import { fas, faInbox } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// config.autoA11y = true;
// config.autoAddCss = true;
// config.autoReplaceSvg = 'nest';
// config.familyPrefix = 'icon';
// config.searchPseudoElements = true;
// config.showMissingIcons = true;

// Add all icons to the library so you can use it in your page
// library.add(fas, far)
// dom.i2svg()
// dom.i2svg({ callback: function () {
//     console.log('Icons have rendered');
// } })
// const css = dom.css()
// dom.insertCss(css)

// const inbox = findIconDefinition({ prefix: 'fas', iconName: 'inbox'})
// const inboxIcon = icon(faInbox)

export default props => {
  return (
    // Pass on our props
    <Menu right {...props}>
      <h2 className="bm-item">
        <i className="fa fa-fw fa-inbox fa-2x" />
        <span>Baby Steps</span>
      </h2>
      <a className="bm-item" href="/">
        <i className="fa fa-fw fa-database" />
        <span>Home</span>
      </a>
      <a className="bm-item" href="/doctor-visits">
        <i className="fa fa-fw fa-map-marker" />
        <span>Doctor Visits</span>
      </a>
      <a className="bm-item" href="/notes">
        <i className="fa fa-fw fa-mortar-board" />
        <span>Research Notes</span>
      </a>
      <a className="bm-item" href="/journal">
        <i className="fa fa-fw fa-picture-o" />
        <span>Journal</span>
      </a>
    </Menu>
  );
};
