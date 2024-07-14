import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';

function Account() {
    const [AdminHint, setAdminHint] = useState(false);

    return (
        <div class="wrapper">
            <div>
                <Nav/>
            </div>
            <div className='admin-container'>
                <div class="admin-sidebar" style={{ display: AdminHint ? 'none' : 'block' }}>
                    <Aside />
                </div>
                <div class="main-panel">
                    <div class="container">
                        <div class="page-inner">
                            <div class="card">
                                <div class="card-header">
                                    <img
                                        className="picHidden"
                                        src={IconHidden}
                                        alt="my pic"
                                        onClick={() => setAdminHint(!AdminHint)}
                                    />
                                    <a className='addbutton' href='AddAccount'>Thêm tài khoản</a>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className='hintTable'>STT</th>
                                                    <th className='hintTable'>Họ và tên</th>
                                                    <th className='hintTable'>Email</th>
                                                    <th className='hintTable'>Số điện thoại</th>
                                                    <th className='hintTable'>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='hintTable'>1</td>
                                                    <td className='hintTable'>Nguyễn Văn A</td>
                                                    <td className='hintTable'>nguyenvana@gmail.com</td>
                                                    <td className='hintTable'>0123456789</td>
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
            <div>
                <Foot/>
            </div>
        </div>
    );
}

export default Account;