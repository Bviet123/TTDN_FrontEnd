import React, { useState } from 'react';
import './App.css';
import Nav from './component-news/NavigationBar/Nav';
import Left from './component-news/LeftContainer/Left';
import Right from './component-news/RightContainer/Right';
import Foot from './component-news/FootContainer/Foot';
import './SearchType.css';
function SearchType() {

    return (
        <div className="App">
            <Nav />
            <main className="App-main">
                <div className="container">
                    <Left />
                    <div className="content">
                        <p className='SearchType_P'>Tìm kiếm theo Thể Thao</p>
                        <div className="News_container">
                            <div className="News_Item">
                                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                                <div className='text_div'>
                                    <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                                </div>
                            </div>
                            <div className="News_Item">
                                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                                <div className='text_div'>
                                    <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                                </div>
                            </div>
                            <div className="News_Item">
                                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                                <div className='text_div'>
                                    <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                                </div>
                            </div>
                            <div className="News_Item">
                                <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                                <div className='text_div'>
                                    <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                                </div>
                            </div>
                        </div>
                        <div className='pagination'>
                            <button className='PagesButton'>Pre</button>
                            <div className='pagesNum'>
                                <a>1</a>
                                <a>2</a>
                                <a>3</a>
                                <a>4</a>
                                <a>5</a>
                                <a>6</a>
                                <a>7</a>
                                <a>8</a>
                                <a>9</a>
                                <a>10</a>
                            </div>
                            <button className='PagesButton'>Next</button>
                        </div>
                    </div>
                    <Right />
                </div>
            </main>
            <Foot />
        </div>
    );
}

export default SearchType;
