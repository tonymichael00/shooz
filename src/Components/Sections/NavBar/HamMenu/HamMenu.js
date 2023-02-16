import React, { useState } from 'react';
import './HamMenu.scss';

const HamMenu = () => {
  const [clickMenu, setClickMenu] = useState(false);
  let menuClassToggle = clickMenu ? 'open' : '';

  function handleClick() {
    setClickMenu(!clickMenu);
    console.log('clicked!!!!!!!!');
  }

  return (
    // <div id="menu-toggle" className={menuClassToggle} onClick={handleClick}>
    <div id="nav-icon1" className={menuClassToggle} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    // </div>
  );
};

export default HamMenu;
