import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import AccountAvatar from '../../../image/avatar-holder.jpeg';

function Account() {
    const [AdminHint, setAdminHint] = useState(false);
    const [EditAccount, setEditAccount] = useState(false);
    const [ShowAccount, setShowAccount] = useState(false);

    return (
        <div class="wrapper">
            <div className='admin-container'>
                <div class="admin-sidebar" style={{ display: AdminHint ? 'none' : 'block' }}>
                    <Aside />
                </div>
                <div className="main-panel">
                    <div className='body-nav-container'>
                        <div>
                            <img
                                className="picHidden"
                                src={IconHidden}
                                alt="my pic"
                                onClick={() => setAdminHint(!AdminHint)}
                            />
                        </div>
                    </div>
                    <div className='Account-right-container'>
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
                                                        <th>ID</th>
                                                        <th>Họ và tên</th>
                                                        <th>Email</th>

                                                        <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Nguyễn Văn A</td>
                                                        <td>nguyenvana@gmail.com</td>

                                                        <th>
                                                            <button className='btn-edit' id="btn-fix" onClick={() => setEditAccount(!EditAccount)}>sửa</button>
                                                            <button className='btn-edit' id="btn-delete">Xóa</button>
                                                            <button className='btn-edit' id="btn-info">Thông tin</button>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Trần Thị B</td>
                                                        <td>tranthib@gmail.com</td>

                                                        <th>
                                                            <button className='btn-edit' id="btn-fix" onClick={() => setEditAccount(!EditAccount)}>sửa</button>
                                                            <button className='btn-edit' id="btn-delete" >Xóa</button>
                                                            <button className='btn-edit' id="btn-info">Thông tin</button>

                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Lê Văn C</td>
                                                        <td>levanc@gmail.com</td>

                                                        <th>
                                                            <button className='btn-edit' id="btn-fix" onClick={() => setEditAccount(!EditAccount)}>sửa</button>
                                                            <button className='btn-edit' id="btn-delete">Xóa</button>
                                                            <button className='btn-edit' id="btn-info" onClick={() => setShowAccount(!ShowAccount)}>Thông tin</button>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-account-block'>
                            <div className="Account-Edit-container" style={{ display: EditAccount ? 'block' : 'none' }}>

                                <form>
                                    <div>
                                        <label for="username">Tên đăng nhập:</label>
                                        <input className='Account-input' type="text" id="username" name="username" required />
                                    </div>
                                    <div >
                                        <label for="password">Mật khẩu:</label>
                                        <input className='Account-input' type="password" name="password" required />
                                    </div>
                                    <div >
                                        <label for="email">Nhập lại mật khẩu:</label>
                                        <input className='Account-input' type="password" name="re-password" required />
                                    </div>
                                    <div>
                                        <button className='Edit-submit' type="submit">Thay đổi</button>
                                    </div>
                                </form>
                            </div>
                            <div style={{ display: ShowAccount ? 'block' : 'none' }}>
                                <form className='Account-user-info'>
                                    <div>
                                        <img src={AccountAvatar} alt='Account-UserImage' />
                                    </div>
                                    <div>
                                        <span>Họ và tên: Lê Văn Chung</span>
                                    </div>
                                    <div>
                                        <span>Email: LeVanChung@gmail.com</span>
                                    </div>
                                    <div>
                                        <span>Địa chỉ: 48 Bùi Thị Xuân</span>
                                    </div>
                                    <div>
                                        <span>Số điện thoại: 0984752145</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;