import React, { useState } from 'react';
import './SeminarNav.css';
import navIcon from '../../image/nav-icon.png';
import SemiAvatar from '../../image/avatar-holder.jpeg';

function SeminarNav() {
  const [isSemiDrop, setIsSemiDrop] = useState(false);
  const [SemiDrop, setSemiDrop] = useState(false);
  const [AvatarSemiDrop, setAvatarSemiDrop] = useState(false);

  return (
    <header className="semi-header">
      <nav className="semi-nav">
        <img src={navIcon} alt="User Icon" className="semi-resize-button" onClick={() => setIsSemiDrop(!isSemiDrop)} style={{ cursor: 'pointer' }} />
        <div className='semi-nav-div-block'>
          <b><a href="Seminar" className="semi-nav-a">Hội Thảo</a></b>
          <b><a href="Conference" className="semi-nav-a">Hội Nghị</a></b>
          <b><a href="Competition" className="semi-nav-a">Hội Thi</a></b>
          <b><a href="/" className="semi-nav-a">Tin Tức</a></b>
        </div>
        <span id="semi-drop" onClick={() => setSemiDrop(!SemiDrop)}>Hội Thảo</span>
        <div className='semi-avatar-container'>
          <div className='semi-avatar-inner'>
            <img src={SemiAvatar} alt="User holder imgage" onClick={() => setAvatarSemiDrop(!AvatarSemiDrop)} className='semi-UserHolder' />
            <span>username</span>
          </div>
          <div className='semi-avatadrop' style={{ display: AvatarSemiDrop ? 'flex' : 'none' }}>
            <span>Tạo bài viết</span>
            <span><a href='UserInfo'>Thông tin</a></span>
            <spa>.......</spa>
          </div>
        </div>
      </nav>
      <div className='semi-dropdown-menu' style={{ display: isSemiDrop ? 'flex' : 'none' }}>
        <div className='semi-drop-a'>
          <form action="/search" className='semi-formSearch'>
            <input className='semi-nav_input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
            <button className='semi-nav_btn_search' type="submit">Tìm kiếm</button>
          </form>
          <b><a href="#" className="semi-nav-a2">Tin mới</a></b>
          <b><a href="#" className="semi-nav-a2">Tin nóng</a></b>
          <b><a href="#" className="semi-nav-a2">Tin siêu mới</a></b>
          <b><a href="#" className="semi-nav-a2">Tin siêu nóng</a></b>
          <b><a href="#" className="semi-nav-a2">Tin thể thao</a></b>
        </div>
      </div>
      <div className='semi-dropdown-menu' style={{ display: SemiDrop ? 'flex' : 'none' }}>
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
