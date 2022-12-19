import React, { useState } from 'react';
import './HamMenu.css';

const HamMenu = () => {
  const [clickMenu, setClickMenu] = useState(false);

  function handleClick() {
    setClickMenu((clickMenu) => !clickMenu);
  }

  let menuClassToggle = clickMenu ? 'open' : '';

  return (
    <div id="menu-toggle" className={menuClassToggle} onClick={handleClick}>
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="cross">
        <span></span>
        <span></span>
      </div>
      <div id="clickMenu">
        <li className="navi">
          <img src={hamMenu} alt="Logo" id="hamMenu" className="center-flex" />
        </li>
      </div>
    </div>
  );
};

export default HamMenu;
