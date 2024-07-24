import React, { useState } from 'react';
import './UserInfo.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import AvatarUser from '../../../image/PlayHolder.png'



function UserInfo() {
    const [UserHint, setUserHint] = useState(false);
    const [UserFix, setUserFix] = useState(false);

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
                                <span>Thay Avatar</span>
                                <span onClick={() => setUserFix(!UserFix)}>Sửa thông tin</span>
                            </div>
                        </div>
                        <div className='User-container'>
                            <div className='User-Image'>
                                <img src={AvatarUser} alt='usser avata' />
                            </div>
                            <div className='User-contact-container'>
                                <div className='User-Information'>
                                    <div>
                                        <span>Họ và tên: </span>
                                        <span>Ngày sinh: </span>
                                        <span>Email: </span>
                                        <span>Số điện thoại: </span>
                                        <span>Địa chỉ: </span>
                                    </div>
                                    <div>
                                        <span>Lê Văn Chung</span>
                                        <span>20/10/2004</span>
                                        <span>LeVanChung@gmail.com</span>
                                        <span>02987542257</span>
                                        <span>Bình Dương</span>
                                    </div>
                                </div>
                                <div className='User-fix-info' style={{ display: UserFix ? 'flex' : 'none' }}>
                                    <span>Họ và tên: </span>
                                    <input type='text'/>
                                    <span>Ngày sinh: </span>
                                    <input type='date'/>
                                    <span>Email: </span>
                                    <input type='email'/>
                                    <span>Số điện thoại: </span>
                                    <input type='text'/>
                                    <span>Địa chỉ: </span>
                                    <input type='text' className='input-user-address'/>
                                    <span className='User-fix-submit'>Xác nhận</span>
                                </div>
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
export default UserInfo;
