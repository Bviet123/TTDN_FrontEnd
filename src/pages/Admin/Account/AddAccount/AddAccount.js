import React, { useState } from 'react';
import './AddAccount.css';
import Aside from '../../../../component-admin/admin-aside/Aside';


function AddAccount() {


    return (
        <div class="wrapper">
            <Aside />
            <div class="main-panel">
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
    )
};


export default AddAccount;