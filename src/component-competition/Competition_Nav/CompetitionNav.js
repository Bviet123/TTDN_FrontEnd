import React, { useState } from 'react';
import './CompetitionNav.css';
import navIcon from '../../image/nav-icon.png';

function CompetitionNavNav() {
  const [isDrop, setIsDrop] = useState(false);
  const [Drop, setDrop] = useState(false);

  return (
    <header className="compe-header">
      <nav className="compe-nav">
        <img src={navIcon} alt="User Icon" className="compe-resize-button" onClick={() => setIsDrop(!isDrop)} style={{cursor: 'pointer'}} />
        <div className='compe-nav-div-block'>
          <b><a href="Seminar" className="compe-nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="compe-nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="compe-nav-a">Hội Thi</a></b>
          <b><a href="/" className="compe-nav-a">Tin Tức</a></b>
        </div>
        <span id="compe-drop" onClick={() => setDrop(!Drop)}>Hội Thi</span>
        <form action="/search" className='compe-formSearch'>
          <input className='compe-nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
          <button className='compe-nav_btn_search' type="submit">Tìm kiếm</button>
        </form>
      </nav>
      <div className='compe-dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
        <div className='compe-drop-a'>
          <b><a href="#" className="compe-nav-a2">Tất cả</a></b>
          <b><a href="#" className="compe-nav-a2">Văn hóa</a></b>
          <b><a href="#" className="compe-nav-a2">Thể thao</a></b>
          <b><a href="#" className="compe-nav-a2">Giáo dục</a></b>
          <b><a href="#" className="compe-nav-a2">Khoa học</a></b>
        </div>
      </div>
      <div className='compe-dropdown-menu' style={{ display: Drop ? 'flex' : 'none' }}>
        <div className="compe-drop-a">
          <a href="Seminar" className='compe-nav-a2'>Hội Thảo</a>
          <a href="Conference" className='compe-nav-a2'>Hội Nghị</a>
          <a href="Competition" className='compe-nav-a2'>Hội Thi</a>
          <a href="/" className='compe-nav-a2'>Tin Tức</a>
        </div>
      </div>
    </header >
  )
}

export default CompetitionNavNav;
