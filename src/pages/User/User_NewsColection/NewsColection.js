import React, { useState } from 'react';
import './NewsColection.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import ImageHold from '../../../image/PlayHolder.png';

function NewsColection() {
    const [UserHint, setUserHint] = useState(false);


    return (
        <div className='Edit-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-user-container'>
                <div className='Editor-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='editor-container'>
                    <div className='create-blog'>
                        <div className='shower-container'>
                            <img
                                className="picHint"
                                src={UserIcon}
                                alt="my hint picture"
                                onClick={() => setUserHint(!UserHint)}
                            />
                            <div>
                                <span>Thêm bài viết</span>
                            </div>
                        </div>
                        <div className='User-container'>
                            <div className='User-contact-container'>
                                <table>
                                    <tr>
                                        <th>Thông tin</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='Admin-news-item'>
                                                <img src={ImageHold} alt='Hình' className='news-image' />
                                                <div className='news-info-container'>
                                                    <div className='info-title-news'>
                                                        <span className='news-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                                    </div>
                                                    <div className='info-news'>
                                                        <span>Người đăng: Lê Văn Chung</span>
                                                        <span>Ngày Đăng: 20/07/2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='news-button'>
                                                <span style={{ backgroundColor: "red", color: "white" }}>Xóa</span>
                                                <span style={{ backgroundColor: "green", color: "white" }}>sửa</span>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='Admin-news-item'>
                                                <img src={ImageHold} alt='Hình' className='news-image' />
                                                <div className='news-info-container'>
                                                    <div className='info-title-news'>
                                                        <span className='news-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                                    </div>
                                                    <div className='info-news'>
                                                        <span>Người đăng: Lê Văn Chung</span>
                                                        <span>Ngày Đăng: 20/07/2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='news-button'>
                                                <span style={{ backgroundColor: "red", color: "white" }}>Xóa</span>
                                                <span style={{ backgroundColor: "green", color: "white" }}>sửa</span>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='userfoot'>
                <Foot />
            </div>
        </div>

    );
}
export default NewsColection;
