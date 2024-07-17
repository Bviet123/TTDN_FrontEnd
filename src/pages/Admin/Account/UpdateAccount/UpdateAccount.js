import React, { useState } from 'react';
import Aside from '../../../../component-admin/admin-aside/Aside';
import LoginIconImg from '../../../../image/nav-icon.png';

function EditAccount() {
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
                    </div>
                    <div class="Account-container">
                        <h1>Thay đổi thông tin tài khoản</h1>
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
                                <button className='btn-submit' type="submit">Thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default EditAccount;