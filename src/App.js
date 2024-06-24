import React, { useState } from 'react';
import './App.css';
import itemPic from '../src/image/PlayHolder.png';

function App() {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <button type='submit' className='resize-button' onClick={() => setIsDrop(!isDrop)}>...</button>
          <div className='nav-div-block'>
            <b><a href="#" className="nav-a">Cuộc Họp</a></b>
            <b><a href="#" className="nav-a">Hội Nghị</a></b>
            <b><a href="#" className="nav-a">Hội Thi</a></b>
          </div>
          <a href="Login" className="login-button">Đăng nhập</a>
        </nav>
        <div className='dropdown-menu' style={{ display: isDrop ? 'flex' : 'none' }}>
          <div className='drop-a'>
            <b><a href="#" className="nav-a2">Cuộc Họp</a></b>
            <b><a href="#" className="nav-a2">Hội Nghị</a></b>
            <b><a href="#" className="nav-a2">Hội Thi</a></b>
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="container">
          <div className='Column_Container'>
            <div className='search_container'>
              <div className='Search_form'>
                <form action="/search">
                  <input className='input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                  <div className='btn_container'>
                    <button className='btn_search' type="submit">Tìm kiếm</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='Type_Text'>
              <b><span className='Type'>Thể loại</span></b>
            </div>
            <div className="aside-left">
              <div className='News_Select'>
                <a href='#' className='News_A'><span className='News_Types'>Giới trẻ</span></a>
                <a href='#' className='News_A'><span className='News_Types'>Thể thao</span></a>
                <a href='#' className='News_A'><span className='News_Types'>Tin nóng</span></a>
                <a href='#' className='News_A'><span className='News_Types'>Tin mới</span></a>
                <a href='#' className='News_A'><span className='News_Types'>Tin siêu siêu nóng</span></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className='image_slider'>
              <img className='HolderSlide' src={itemPic} alt="The holder pictrue" />
            </div>
            <div className="News_container">
              <div className="News_Item">
                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                <div className='text_div'>
                  <a href='#' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                </div>
              </div>
              <div className="News_Item">
                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                <div className='text_div'>
                  <a href='#' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                </div>
              </div>
              <div className="News_Item">
                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                <div className='text_div'>
                  <a href='#' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                </div>
              </div>
              <div className="News_Item">
                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                <div className='text_div'>
                  <a href='#' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                </div>
              </div>
            </div>
          </div>
          <div className='Column_Container_right'>
            <div>
              <b><span className='Type'>Các cuộc họp sắp diễn ra</span></b>
            </div>
            <div className="aside-right">
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
            </div>
            <div>
              <b><span className='Type'>Các cuộc hội nghị sắp diễn ra</span></b>
            </div>
            <div className="aside-right">
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
            </div>
            <div>
              <b><span className='Type'>Các cuộc hội thảo sắp diễn ra</span></b>
            </div>
            <div className="aside-right">
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
              <div className='aside-around'>
                <b><a href='#' className='text_link'><p className='Type'>Hội nghị về phương pháp gải quyết...</p></a></b>
                <p>Mã họp: D23435</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div>
          <p>Sản phẩm được tạo </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
