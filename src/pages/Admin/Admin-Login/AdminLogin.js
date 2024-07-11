import React from 'react';
import './AdminLogin.css';

function LoginAdmin() {
    return (
        <div className='Admin-login-container'>
            <div className='Admin-login-form'>
                <div className='Admin-login-inner-form'>
                    <b><span className='Admin-login-text'>Đăng nhập</span></b>
                    <div className='Admin-input-wapper'>
                        <p>Tên đăng nhập :</p>
                        <input className='Admin-login-input' type="text" placeholder="Nhập tài khoản của bạn" required />
                    </div>
                    <div className='Admin-input-wapper'>
                        <p>Mật khẩu :</p>
                        <input className='Admin-login-input' type="password" placeholder="Nhập mật khẩu của bạn" required />
                    </div>
                    
                    <button type='submit' className='Admin-btn-login'>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
