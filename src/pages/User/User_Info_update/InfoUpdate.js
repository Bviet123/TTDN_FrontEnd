import React, { useState } from 'react';
import './InfoUpdate.css';
import UserAside from '../../../component-user/User-Aside/UserAside';
import userImage from '../../../image/avatar-holder.jpeg';
import ImgHidden from '../../../image/nav-icon.png';


function InfoUpdate() {
    const [UserHin, setUserHin] = useState(false);
    return (
        <div class="update-user-wrapper">
            <div class="update-user-sidebar">
                <UserAside />
            </div>
            <div className='update-user-outside'>
                <img src={ImgHidden} alt='hidden image' className='hiddenimg' onClick={() => setUserHin(!UserHin)} />
                <div className='update-user-aside-drop' style={{ display: UserHin ? 'block' : 'none' }}>
                    <UserAside />
                </div>
                <div className="update-user-main-panel">
                    <div className='update-user-container'>
                        <div className='update-user-image-container'>
                            <img src={userImage} alt='user holder image' className='update-user-image-holder' />
                        </div>
                        <div className='update-user-info'>
                            <div>
                                <span>Họ và tên: </span>
                                <span>Ngày Sinh: </span>
                                <span>Email: </span>
                                <span>Địa chỉ: </span>
                                <span>Số điện thoại: </span>
                            </div>
                            <div>
                                <input  type="text" placeholder="Nhập tên của bạn" required />
                                <input  type="date" required />
                                <input  type="email" placeholder="Nhập email của bạn" required />
                                <input  type="text" placeholder="Nhập đại chỉ của bạn" required />
                                <input  type="text" placeholder="Nhập số điện thoại" required />
                            </div>
                        </div>
                        <span className='update-user-edit-button'>Xác nhận</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoUpdate;