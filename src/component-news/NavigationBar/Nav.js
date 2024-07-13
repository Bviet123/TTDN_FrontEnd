import React, { useState } from 'react';
import './Nav.css';
import navIcon from '../../image/nav-icon.png';
import Avata from '../../image/avatar-holder.jpeg';

function Nav() {
  const [isDrop, setIsDrop] = useState(false);
  const [Drop, setDrop] = useState(false);
  const [AvatarDrop, setAvatarDrop] = useState(false);

  return (
    <header className="App-header">
      <nav className="App-nav">
        <img src={navIcon} alt="User Icon" className="resize-button" onClick={() => setIsDrop(!isDrop)} style={{ cursor: 'pointer' }} />
        <div className='nav-div-block'>
          <b><a href="Seminar" className="nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="nav-a">Hội Thi</a></b>
          <b><a href="/" className="nav-a">Tin Tức</a></b>
        </div>
        <span id="drop" onClick={() => setDrop(!Drop)}>Tin Tức</span>
        <div className='avatar-container'>
          <div className='avatar-inner'>
            <img src={Avata} alt="User holder imgage" onClick={() => setAvatarDrop(!AvatarDrop)} className='UserHolder'/>
            <span>username</span>
          </div>
          <div className='avatadrop' style={{ display: AvatarDrop ? 'flex' : 'none' }}>
            <span><a href='UserEditor'>Tạo bài viết</a></span>
            <span><a href='UserInfo'>Thông tin</a></span>
            <span>.......</span>
          </div>
        </div>
      </nav>
      <div className='dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
        <div className='drop-a'>
          <form action="/search" className='formSearch'>
            <input className='nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
            <button className='nav_btn_search' type="submit">Tìm kiếm</button>
          </form>
          <b><a href="#" className="nav-a2">Tin mới</a></b>
          <b><a href="#" className="nav-a2">Tin nóng</a></b>
          <b><a href="#" className="nav-a2">Tin siêu mới</a></b>
          <b><a href="#" className="nav-a2">Tin siêu nóng</a></b>
          <b><a href="#" className="nav-a2">Tin thể thao</a></b>
        </div>
      </div>
      <div className='dropdown-menu' style={{ display: Drop ? 'flex' : 'none' }}>
        <div className="drop-a">
          <a href="Seminar" className='nav-a2'>Hội Thảo</a>
          <a href="Conference" className='nav-a2'>Hội Nghị</a>
          <a href="Competition" className='nav-a2'>Hội Thi</a>
          <a href="/" className='nav-a2'>Tin Tức</a>
        </div>
      </div>
    </header >
  )
}

export default Nav;
