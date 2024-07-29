import React, { useState } from 'react';
import './EventList.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconEvent from '../../../image/nav-icon.png';
import EventImage from '../../../image/PlayHolder.png';

function EventList() {
    const [EditorHint, setEditorHint] = useState(false);
    const [eventList, setEvenList] = useState([
        { id: 1, name: 'Hội nghị' },
        { id: 2, name: 'Hội thảo' },
        { id: 3, name: 'Hội thi' },

    ]);
    const [selectedList, setSelectedList] = useState('');

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
                            src={IconEvent}
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
                        <div>
                            <button className='Event-Add'>Thêm</button>
                            <select
                                className='Event-input-layout'
                                value={selectedList}
                                onChange={(e) => setSelectedList(e.target.value)}
                                required
                            >
                                <option value="">Chọn danh sách</option>
                                {eventList.map((Event) => (
                                    <option key={Event.id} value={Event.id}>
                                        {Event.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <table className='Event-table'>
                            <tr>
                                <th>Thông tin</th>
                                <th>Thao tác</th>
                                <th>Mới nhất</th>
                                <th>Nổi bật</th>
                            </tr>

                            <tr>
                                <td>
                                    <div className='Event-items'>
                                        <img src={EventImage} alt='Hình' className='Event-image' />
                                        <div className='Event-info-container'>
                                            <div className='info-title-Event'>
                                                <span className='Event-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                            </div>
                                            <div className='Event-Description'>
                                                <span>Trong trận chung kết của giải đấu tuyển thủ lê bình khiêm đã xuất sắc thể hiện....</span>
                                            </div>
                                            <div className='info-Event'>
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
        </div>
    );
}

export default EventList;