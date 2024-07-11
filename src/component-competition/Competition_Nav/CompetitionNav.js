import React, { useState } from 'react';
import './CompetitionNav.css';
import navIcon from '../../image/nav-icon.png';
import CompeAvata from '../../image/avatar-holder.jpeg';
function CompetitionNavNav() {
  const [isCompeDrop, setIsCompeDrop] = useState(false);
  const [compeDrop, setCompeDrop] = useState(false);
  const [compeAvatarDrop, setCompeAvatarDrop] = useState(false);

  return (
    <header className="compe-header">
      <nav className="compe-nav">
        <img src={navIcon} alt="User Icon" className="compe-resize-button" onClick={() => setIsCompeDrop(!isCompeDrop)} style={{ cursor: 'pointer' }} />
        <div className='compe-nav-div-block'>
          <b><a href="Seminar" className="compe-nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="compe-nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="compe-nav-a">Hội Thi</a></b>
          <b><a href="/" className="compe-nav-a">Tin Tức</a></b>
        </div>
        <span id="compe-drop" onClick={() => setCompeDrop(!compeDrop)}>Hội Thi</span>
        <div className='compe-avatar-container'>
          <div className='compe-avatar-inner'>
            <img src={CompeAvata} alt="User holder imgage" onClick={() => setCompeAvatarDrop(!compeAvatarDrop)} className='compe-UserHolder' />
            <span>username</span>
          </div>
          <div className='compe-avatadrop' style={{ display: compeAvatarDrop ? 'flex' : 'none' }}>
            <span>Tạo bài viết</span>
            <span><a href='UserInfo'>Thông tin</a></span>
            <spa>.......</spa>
          </div>
        </div>
      </nav>
      <div className='compe-dropdown-menu' style={{ display: isCompeDrop ? 'flex' : 'none' }}>
        <div className='compe-drop-a'>
          <form action="/search" className='compe-formSearch'>
            <input className='compe-nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
            <button className='compe-nav_btn_search' type="submit">Tìm kiếm</button>
          </form>
          <b><a href="#" className="compe-nav-a2">Tất cả</a></b>
          <b><a href="#" className="compe-nav-a2">Văn hóa</a></b>
          <b><a href="#" className="compe-nav-a2">Thể thao</a></b>
          <b><a href="#" className="compe-nav-a2">Giáo dục</a></b>
          <b><a href="#" className="compe-nav-a2">Khoa học</a></b>
        </div>
      </div>
      <div className='compe-dropdown-menu' style={{ display: compeDrop ? 'flex' : 'none' }}>
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
