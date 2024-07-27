import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import AccountAvatar from '../../../image/avatar-holder.jpeg';

function Account() {
    const [AdminHint, setAdminHint] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    
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
                                        <a className='addbutton' onClick={() => toggleSection('add')}>Thêm tài khoản</a>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table id='Account-table'>
                                                <thead>
                                                    <tr>
                                                        <th className='table-id'>ID</th>
                                                        <th>Họ và tên</th>
                                                        <th>Email</th>
                                                        <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='table-id'>1</td>
                                                        <td>Nguyễn Văn A</td>
                                                        <td>nguyenvana@gmail.com</td>

                                                        <th className='edit-account-container'>
                                                            <button className='btn-edit' id="btn-fix" onClick={() => toggleSection('edit')}>Sửa</button>
                                                            <button className='btn-edit' id="btn-delete">Xóa</button>
                                                            <button className='btn-edit' id="btn-info" onClick={() => toggleSection('show')}>Thông tin</button>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td className='table-id'>1</td>
                                                        <td>Lê Hoài Bão Chung</td>
                                                        <td>nguyenvana@gmail.com</td>

                                                        <th className='edit-account-container'>
                                                            <button className='btn-edit' id="btn-fix" onClick={() => toggleSection('edit')}>Sửa</button>
                                                            <button className='btn-edit' id="btn-delete">Xóa</button>
                                                            <button className='btn-edit' id="btn-info" onClick={() => toggleSection('show')}>Thông tin</button>
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
                            <div className="Account-Edit-container" style={{ display: activeSection === 'edit' ? 'flex' : 'none' }}>

                                <form className='Account-form'>
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
                            
                            <div className="Account-Edit-container" style={{ display: activeSection === 'add' ? 'flex' : 'none' }}>

                                <form className='Account-form'>
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
                                        <button className='Edit-submit' type="submit">Tạo tài khoản</button>
                                    </div>
                                </form>
                            </div>

                            <div style={{ display: activeSection === 'show' ? 'flex' : 'none' }}>
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