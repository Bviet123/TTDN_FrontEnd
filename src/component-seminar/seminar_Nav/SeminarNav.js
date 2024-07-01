import React, { useState } from 'react';
import './SeminarNav.css';
import navIcon from '../../image/nav-icon.png';

function SeminarNav() {
  const [isDrop, setIsDrop] = useState(false);
  const [Drop, setDrop] = useState(false);

  return (
    <header className="semi-header">
      <nav className="semi-nav">
        <img src={navIcon} alt="User Icon" className="semi-resize-button" onClick={() => setIsDrop(!isDrop)} style={{cursor: 'pointer'}} />
        <div className='semi-nav-div-block'>
          <b><a href="Seminar" className="semi-nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="semi-nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="semi-nav-a">Hội Thi</a></b>
          <b><a href="/" className="semi-nav-a">Tin Tức</a></b>
        </div>
        <span id="semi-drop" onClick={() => setDrop(!Drop)}>Hội Thảo</span>
        <form action="/search" className='semi-formSearch'>
          <input className='semi-nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
          <button className='semi-nav_btn_search' type="submit">Tìm kiếm</button>
        </form>
      </nav>
      <div className='semi-dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
        <div className='semi-drop-a'>
          <b><a href="#" className="semi-nav-a2">Tin mới</a></b>
          <b><a href="#" className="semi-nav-a2">Tin nóng</a></b>
          <b><a href="#" className="semi-nav-a2">Tin siêu mới</a></b>
          <b><a href="#" className="semi-nav-a2">Tin siêu nóng</a></b>
          <b><a href="#" className="semi-nav-a2">Tin thể thao</a></b>
        </div>
      </div>
      <div className='semi-dropdown-menu' style={{ display: Drop ? 'flex' : 'none' }}>
        <div className="semi-drop-a">
          <a href="Seminar" className='semi-nav-a2'>Hội Thảo</a>
          <a href="Conference" className='semi-nav-a2'>Hội Nghị</a>
          <a href="Competition" className='semi-nav-a2'>Hội Thi</a>
          <a href="/" className='semi-nav-a2'>Tin Tức</a>
        </div>
      </div>
    </header >
  )
}

export default SeminarNav;
