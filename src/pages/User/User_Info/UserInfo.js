import React, { useState } from 'react';
import './UserInfo.css';
import UserAside from '../../../component-user/User-Aside/UserAside';
import userImage from '../../../image/avatar-holder.jpeg';
import ImgHidden from '../../../image/nav-icon.png';


function UserInfo() {
    const [UserHin, setUserHin] = useState(false);
    return (
        <div class="user-wrapper">
            <div class="user-sidebar">
                <UserAside />
            </div>
            <div className='user-outside'>
            <img src={ImgHidden} alt='hidden image' className='hiddenimg' onClick={() => setUserHin(!UserHin)}/>
            <div className='user-aside-drop' style={{ display: UserHin ? 'block' : 'none' }}>
                <UserAside/>
            </div>
                <div className="user-main-panel">
                    <div className='user-container'>
                        <div className='user-image-container'>
                            <img src={userImage} alt='user holder image' className='user-image-holder' />
                        </div>
                        <div className='user-info'>
                            <div>
                                <span>Họ và tên: </span>
                                <span>Ngày Sinh: </span>
                                <span>Email: </span>
                                <span>Địa chỉ: </span>
                                <span>Số điện thoại: </span>
                            </div>
                            <div>
                                <span>Lê Văn chung </span>
                                <span>15/02/2008 </span>
                                <span>levanchung@gmail.com </span>
                                <span>Bình Dương </span>
                                <span>098547221568 </span>
                            </div>
                        </div>
                        <span className='user-edit-button'><a href='UserInfoUpdate'>Chỉnh sửa</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;