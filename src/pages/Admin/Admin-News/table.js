import React, { useState } from 'react';
import './table.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import ImageNew from '../../../image/PlayHolder.png';


function TableNews() {
    const [EditorHint, setEditorHint] = useState(false);


    return (
        <div class="Admin-wrapper">

            <div class='Admin-sidebar' style={{ display: EditorHint ? 'none' : 'block' }}>
                <Aside />
            </div>
            <div class="Admin-main-panel">
                <div className='Admin-body-nav-container'>
                    <div>
                        <img
                            className="Admin-picHidden"
                            src={IconHidden}
                            alt="my pic"
                            onClick={() => setEditorHint(!EditorHint)}
                        />
                    </div>
                    <div className='Admin-container-admin-form'>
                        <div className='Admin-form'>
                            <input type='text' placeholder='TÌm kiếm .....' className='Admin-input' />
                            <button className='Admin-admin-submit'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="Admin-container-admin-table">
                    <div class="Admin-news-inner">
                        <table>
                            <tr>
                                <th>Thông tin</th>
                                <th>Thao tác</th>
                                <th>Mới nhất</th>
                                <th>Nổi bật</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className='Admin-news-item'>
                                        <img src={ImageNew} alt='Hình' className='news-image' />
                                        <div className='news-info-container'>
                                            <div className='info-title-news'>
                                                <span className='news-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                            </div>
                                            <div className='info-news'>
                                                <span>Người đăng: Lê Văn Chung</span>
                                                <span>Ngày Đăng: 20/07/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='news-button'>
                                        <span style={{ backgroundColor: "red", color: "white" }}>Xóa</span>
                                        <span style={{ backgroundColor: "green", color: "white" }}>sửa</span>
                                    </div>
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='Admin-news-item'>
                                        <img src={ImageNew} alt='Hình' className='news-image' />
                                        <div className='news-info-container'>
                                            <div className='info-title-news'>
                                                <span className='news-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                            </div>
                                            <div className='info-news'>
                                                <span>Người đăng: Lê Văn Chung</span>
                                                <span>Ngày Đăng: 20/07/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='news-button'>
                                        <span style={{ backgroundColor: "red", color: "white" }}>Xóa</span>
                                        <span style={{ backgroundColor: "green", color: "white" }}>sửa</span>
                                    </div>
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>

        </div >
    );
}

export default TableNews;