import React from 'react';
import '../pages_css/Login.css';

function Login() {
    return (
        <div className='login-container'>
            <div className='login-form'>
                <div className='login-inner-form'>
                    <b><span className='login-text'>Đăng nhập</span></b>
                    <div className='input-wapper'>
                        <p>Tên đăng nhập :</p>
                        <input className='login-input' type="text" placeholder="Nhập tài khoản của bạn" required />
                    </div>
                    <div className='input-wapper'>
                        <p>Mật khẩu :</p>
                        <input className='login-input' type="password" placeholder="Nhập mật khẩu của bạn" required />
                    </div>
                    <div className='hint-forget-pass'>
                        <a href='#' className='login-forget'>Quên mật khẩu?</a>
                    </div>
                    <button type='submit' className='btn-login'>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
