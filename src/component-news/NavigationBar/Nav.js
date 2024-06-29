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
          <b><a href="Competition" className="nav-a">Hội Thi</a></b>
        </div>
        <form action="/search" className='formSearch'>
          <input className='nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
          <button className='nav_btn_search' type="submit">Tìm kiếm</button>
        </form>
      </nav>
      <div className='dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
        <div className='drop-a'>
          <b><a href="#" className="nav-a2">Hội Thảo</a></b>
          <b><a href="#" className="nav-a2">Hội Nghị</a></b>
          <b><a href="Competition" className="nav-a2">Hội Thi</a></b>
        </div>
      </div>
      <div className='resize-nav'>
        <span>Giới trẻ</span>
        <span>Thể thao</span>
        <span>Tin Nóng</span>
        <span>Tin mới</span>
        <span>Tin siêu siêu nóng</span>
      </div>
    </header >
  )
}

export default Nav;
