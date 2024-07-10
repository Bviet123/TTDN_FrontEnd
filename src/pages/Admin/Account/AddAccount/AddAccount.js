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
                    <form id="registration-form">
                        <div class="form-group">
                            <label for="username">Tên đăng nhập:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Mật khẩu:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div class="form-group">
                            <label for="role">Quyền hạn:</label>
                            <div class="radio-buttons">
                                <input type="radio" id="user" name="role" value="user" required />
                                <label for="user">Người dùng</label>
                                <input type="radio" id="admin" name="role" value="admin" />
                                <label for="admin">Quản trị viên</label>
                            </div>

                            <button type="submit">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default AddAccount;