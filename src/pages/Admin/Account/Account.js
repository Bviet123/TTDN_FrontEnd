import React, { useState } from 'react';
import './Account2.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';


function Account() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); 

    const handleClickImage = () => {
        setIsSidebarVisible((prevState) => !prevState);
    };
    return (
        <div class="wrapper">
            {isSidebarVisible && (
                <div class="sidebar">
                    <Aside />
                </div>
            )}
            <div class="main-panel">
                <div class="container">
                    <div class="page-inner">
                        <div class="card">
                            <div class="card-header">
                                <img
                                    className="picHidden"
                                    src={IconHidden}
                                    alt="my pic"
                                    onClick={handleClickImage} 
                                />
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
                                                    <button>sửa</button>
                                                    <button>Xóa</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Trần Thị B</td>
                                                <td>tranthib@gmail.com</td>
                                                <td>0987654321</td>
                                                <th>
                                                    <button>sửa</button>
                                                    <button>Xóa</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Lê Văn C</td>
                                                <td>levanc@gmail.com</td>
                                                <td>0123456789</td>
                                                <th>
                                                    <button>sửa</button>
                                                    <button>Xóa</button>
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
    );
}

export default Account;