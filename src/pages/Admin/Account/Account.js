import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import AccountAvatar from '../../../image/avatar-holder.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Account() {
    const [AdminHint, setAdminHint] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [showPassword, setShowPassword] = useState({});
    const [roleList, setRoleList] = useState([
        { id: 1, name: 'Admin' },
        { id: 2, name: 'User' },
        { id: 3, name: 'Quản lí tin tức' },

    ]);

    const [selectedRole, setSelectedRole] = useState('');

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const togglePassword = (id) => {
        setShowPassword(prev => ({ ...prev, [id]: !prev[id] }));
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
                                                        <th>Tài khoản</th>
                                                        <th>Mật khẩu</th>
                                                        <th>Quyền hạn</th>
                                                        <th>Thao tác</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='table-id'>1</td>
                                                        <td>Admin</td>
                                                        <td>
                                                            <div className="Password-column"    >
                                                                <span>{showPassword[1] ? '123465748' : '••••••••'}</span>
                                                                <button className='toggle-password' onClick={() => togglePassword(1)}>
                                                                    <FontAwesomeIcon icon={showPassword[1] ? faEyeSlash : faEye} />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <th>
                                                            <div>
                                                                <span style={{fontSize: '15px'}}>Admin</span>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className='edit-account-container'>
                                                                <button className='btn-edit' id="btn-fix" onClick={() => toggleSection('edit')}>Sửa</button>
                                                                <button className='btn-edit' id="btn-delete">Xóa</button>
                                                                <button className='btn-edit' id="btn-info" onClick={() => toggleSection('show')}>Thông tin</button>
                                                            </div>
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
                                    <div >
                                        <label>Quyền hạn:</label>
                                        <select
                                            className='Accont-input-layout'
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
                                            required
                                        >
                                            <option value="">Quản lí hội nghị</option>
                                            {roleList.map((Item) => (
                                                <option key={Item.id} value={Item.id}>
                                                    {Item.name}
                                                </option>
                                            ))}
                                        </select>
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
                                        <label for="password">Nhập lại mật khẩu:</label>
                                        <input className='Account-input' type="password" name="re-password" required />
                                    </div>
                                    <div >
                                        <label>Quyền hạn:</label>
                                        <select
                                            className='Accont-input-layout'
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
                                            required
                                        >
                                            <option value="">Quản lí hội nghị</option>
                                            {roleList.map((Item) => (
                                                <option key={Item.id} value={Item.id}>
                                                    {Item.name}
                                                </option>
                                            ))}
                                        </select>
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