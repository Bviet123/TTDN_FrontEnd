import React, { useState } from 'react';
import './Nav.css';
import navIcon from './nav-icon.png';

function Nav() {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <header className="App-header">
        <nav className="App-nav">
          <img src={navIcon} alt="User Icon" className="resize-button" onClick={() => setIsDrop(!isDrop)} />
          <div className='nav-div-block'>
            <b><a href="#" className="nav-a">Hội Thảo</a></b>
            <b><a href="#" className="nav-a">Hội Nghị</a></b>
            <b><a href="#" className="nav-a">Hội Thi</a></b>
          </div>

          <a href="Login" className="login-button">Đăng nhập</a>

        </nav>
        <div className='dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
          <div className='drop-a'>
            <b><a href="#" className="nav-a2">Hội Thảo</a></b>
            <b><a href="#" className="nav-a2">Hội Nghị</a></b>
            <b><a href="#" className="nav-a2">Hội Thi</a></b>
          </div>
        </div>
    </header>
  )
}

export default Nav;
