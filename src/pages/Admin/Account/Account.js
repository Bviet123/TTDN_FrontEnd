import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import AdminAvatar from '../../../image/avatar-holder.jpeg';

function Account() {
    const [AdminHint, setAdminHint] = useState(false);
    const [AdminDrop, setAdminDrop] = useState(false);
    return (
        <div class="wrapper">

            <div className='admin-container'>
                <div class="admin-sidebar" style={{ display: AdminHint ? 'none' : 'block' }}>
                    <Aside />
                </div>
                <div class="main-panel">
                    <div className='body-nav-container'>
                        <div>
                            <img
                                className="picHidden"
                                src={IconHidden}
                                alt="my pic"
                                onClick={() => setAdminHint(!AdminHint)}
                            />
                        </div>
                        <div className='container-admin-form'>
                            <img src={AdminAvatar} alt="User holder imgage" onClick={() => setAdminDrop(!AdminDrop)} className='AdminHolder' />
                            <span id="admin-nav-name">username</span>
                            <div className='admin-form'>
                                <input type='text' placeholder='TÌm kiếm .....' className='admin-input'/>
                                <button className='admin-submit'>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div class="container-admin-table">
                        <div class="page-inner">
                            <div class="card">
                                <div class="card-header">
                                    <a className='addbutton' href='AddAccount'>Thêm tài khoản</a>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Họ và tên</th>
                                                    <th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nguyễn Văn A</td>
                                                    <td>nguyenvana@gmail.com</td>
                                                    <td>0123456789</td>
                                                    <th>
                                                        <button className='btn-edit' id="btn-fix">sửa</button>
                                                        <button className='btn-edit' id="btn-delete">Xóa</button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Trần Thị B</td>
                                                    <td>tranthib@gmail.com</td>
                                                    <td>0987654321</td>
                                                    <th>
                                                        <button className='btn-edit' id="btn-fix">sửa</button>
                                                        <button className='btn-edit' id="btn-delete">Xóa</button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Lê Văn C</td>
                                                    <td>levanc@gmail.com</td>
                                                    <td>0123456789</td>
                                                    <th>
                                                        <button className='btn-edit' id="btn-fix">sửa</button>
                                                        <button className='btn-edit' id="btn-delete">Xóa</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;