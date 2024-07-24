import React, { useState } from 'react';
import './EditorColection.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import AvatarUser from '../../../image/PlayHolder.png'
import ImageUserEdit from '../../../image/PlayHolder.png'
import { FaTimesCircle } from 'react-icons/fa';



function UserColection() {
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
                        </div>
                        <div className='User-container'>
                            <div className='User-colection-container'>
                                <div className='select-block-container'>
                                    <div className='conference-block'>
                                        <span>Hội nghị</span>
                                        <span>2</span>
                                    </div>
                                    <div className='seminar-block'>
                                        <span> Hội thảo</span>
                                        <span>1</span>
                                    </div>
                                    <div className='competion-block'>
                                        <span>Hội thi</span>
                                        <span>1</span>
                                    </div>
                                    <div className='sum-block'>
                                        <span>Tất cả</span>
                                        <span>4</span>
                                    </div>
                                </div>
                                <table>
                                    <tr>
                                        <th>Thông tin</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='Admin-news-item'>
                                                <img src={ImageUserEdit} alt='Hình' className='news-image' />
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
                                                <FaTimesCircle className='delete-icon' size={30} />
                                            </div>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='Admin-news-item'>
                                                <img src={ImageUserEdit} alt='Hình' className='news-image' />
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
                                                <FaTimesCircle className='delete-icon' size={30} />
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
export default UserColection;
