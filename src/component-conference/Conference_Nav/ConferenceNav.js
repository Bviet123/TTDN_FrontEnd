import React, { useState } from 'react';
import './ConferenceNav.css';
import navIcon from '../../image/nav-icon.png';

function ConferenceNav() {
  const [isDrop, setIsDrop] = useState(false);
  const [Drop, setDrop] = useState(false);

  return (
    <header className="Confe-header">
      <nav className="Confe-nav">
        <img src={navIcon} alt="User Icon" className="Confe-resize-button" onClick={() => setIsDrop(!isDrop)} style={{cursor: 'pointer'}} />
        <div className='Confe-nav-div-block'>
          <b><a href="Seminar" className="Confe-nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="Confe-nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="Confe-nav-a">Hội Thi</a></b>
          <b><a href="/" className="Confe-nav-a">Tin Tức</a></b>
        </div>
        <span id="Confe-drop" onClick={() => setDrop(!Drop)}>Hội Nghị</span>
        <form action="/search" className='Confe-formSearch'>
          <input className='Confe-nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
          <button className='Confe-nav_btn_search' type="submit">Tìm kiếm</button>
        </form>
      </nav>
      <div className='Confe-dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
        <div className='Confe-drop-a'>
          <b><a href="#" className="Confe-nav-a2">Tất cả</a></b>
          <b><a href="#" className="Confe-nav-a2">Quốc tế</a></b>
          <b><a href="#" className="Confe-nav-a2">Chuyên đề</a></b>
          <b><a href="#" className="Confe-nav-a2">Khoa Học</a></b>
          <b><a href="#" className="Confe-nav-a2">Thương mại</a></b>
        </div>
      </div>
      <div className='Confe-dropdown-menu' style={{ display: Drop ? 'flex' : 'none' }}>
        <div className="Confe-drop-a">
          <a href="Seminar" className='Confe-nav-a2'>Hội Thảo</a>
          <a href="Conference" className='Confe-nav-a2'>Hội Nghị</a>
          <a href="Competition" className='Confe-nav-a2'>Hội Thi</a>
          <a href="/" className='Confe-nav-a2'>Tin Tức</a>
        </div>
      </div>
    </header >
  )
}

export default ConferenceNav;
