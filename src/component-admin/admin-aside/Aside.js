import React, { useState } from 'react';
import './Aside.css';

function Aside() {


    return (
        <div className="admin-sidebar-content" id="adminhome">
            <a href='AdminInfo'>Admin Home</a>
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