import React, { useState } from 'react';
import './AddAccount.css';
import Aside from '../../../../component-admin/admin-aside/Aside';
import LoginIconImg from '../../../../image/nav-icon.png';
import AvatarImg from '../../../../image/avatar-holder.jpeg';

function AddAccount() {
    const [LoginDrop, setLoginDrop] = useState(false);
    const [LoginHint, setLoginHint] = useState(false);

    return (
        <div class="wrapper">
            <div className='admin-container'>
                <div className='admin-sidebar' style={{ display: LoginHint ? 'none' : 'block' }}>
                    <Aside />
                </div>
                <div class="main-panel">
                    <div className='body-nav-container'>
                        <div className='admin-dropdown'>
                            <img
                                className="picHidden"
                                src={LoginIconImg}
                                alt="my pic"
                                onClick={() => setLoginHint(!LoginHint)}
                            />
                        </div>
                        <div className='container-admin-form' id="container-login-form">
                            <div className='AccountAvatar'>
                                <img src={AvatarImg} alt="User holder imgage" onClick={() => setLoginDrop(!LoginDrop)} className='AdminHolder' />
                                <span className="admin-nav-name">username</span>
                            </div>
                            <div className='Accountdrop' style={{ display: LoginDrop ? 'flex' : 'none' }}>
                                <span><a href='UserEditor'>Tạo bài viết</a></span>
                                <span><a href='UserInfo'>Thông tin</a></span>
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                    <div class="AddAccount-container">
                        <h1>Đăng ký tài khoản</h1>
                        <form className='div-form' id="registration-form">
                            <div class="form-group">
                                <label for="username">Tên đăng nhập:</label>
                                <input className='Account-input' type="text" id="username" name="username" required />
                            </div>
                            <div class="form-group">
                                <label for="password">Mật khẩu:</label>
                                <input className='Account-input' type="password" name="password" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Nhập lại mật khẩu:</label>
                                <input className='Account-input' type="password" name="re-password" required />
                            </div>
                            <div class="form-group">
                                <button className='btn-submit' type="submit">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AddAccount;