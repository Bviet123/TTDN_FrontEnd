import React, { useState } from 'react';
import './Aside.css';

function Aside() {


    return (
        <div class="sidebar">
            <div class="sidebar-content">
                <ul class="nav nav-secondary">
                    <li>
                        <a href="#dashboard">
                            <p>Admin</p>
                        </a>
                    </li>
                    <li class="nav-section">
                        <h4 class="text-section">Option</h4>
                    </li>
                    <li class="nav-item" >
                        <a href="#">
                            <p>Tài khoản</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#sidebarLayouts">
                            <p>Tin tức</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#forms">
                            <p>Hội nghị</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#tables">
                            <p>Hội thảo</p>

                        </a>

                    </li>
                    <li class="nav-item">
                        <a href="#maps">
                            <p>Hội thi</p>

                        </a>

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Aside;