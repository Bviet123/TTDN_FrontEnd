import React, { useState } from 'react';
import './UserAside.css';

function UserAside() {


    return (
            <div className="user-sidebar-content" id="userhome">
                <a href='UserInfo'>User Home</a>
                <span>Option</span>
                <div className='option-user'>
                    <a href='UserInfo'>Thông tin</a>
                    <a>Bài đăng</a>
                    <a>Đã đăng kí</a>
                    <a>Tin tức</a>
                </div>
            </div>
    );
}

export default UserAside;