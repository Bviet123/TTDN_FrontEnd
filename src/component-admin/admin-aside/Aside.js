import React, { useState } from 'react';
import './Aside.css';
import AsidePic from '../../image/avatar-holder.jpeg';

function Aside() {


    return (
        <div className="admin-sidebar-content">
            <div className='admin-aside-pic-container'>
                <img src={AsidePic} alt='avatar-pic-aside' className='aside-avatar' />
                <div>
                    <span id="aside-name">Nguyễn Lê Thành Chung</span>
                    <span id="aside-role">Quyền: Admin</span>
                </div>
            </div>
            <span>Option</span>
            <div className='option-admin'>
                <a>Tài Khoản</a>
                <a>Tin Tức</a>
                <a>Hội Ngị</a>
                <a>Hội Thảo</a>
                <a>Hội Thi</a>
            </div>
        </div>
    );
}

export default Aside;