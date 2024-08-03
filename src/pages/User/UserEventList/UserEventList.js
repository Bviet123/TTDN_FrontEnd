import React, { useState } from 'react';
import './UserEventList.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import ImageHold from '../../../image/PlayHolder.png';

function UserEventList() {
    const [UserEventHint, setUserEventHint] = useState(false);
    const [EventSelect, setEventSelect] = useState([
        { id: 1, name: 'Hội nghị' },
        { id: 2, name: 'Hội thảo' },
        { id: 3, name: 'Hội thi' },
    ]);
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <div className='EvtList-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='EvtList-user-container'>
                <div className='EvtList-aside' style={{ display: UserEventHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='EvtList-container'>
                    <div className='EvtList-create-blog'>
                        <div className='EvtList-shower-container'>
                            <img
                                className="EvtList-picHint"
                                src={UserIcon}
                                alt="my hint picture"
                                onClick={() => setUserEventHint(!UserEventHint)}
                            />
                            <div>
                                <span>Thêm bài viết</span>
                            </div>
                        </div>
                        <div className='EvtList-container'>
                            <div className='EvtList-contact-container'>
                                <table>
                                    <tr>
                                        <th colSpan='2'>
                                            <div className='EvtList-header-table'>
                                                <select
                                                    className='EvtList-input-layout'
                                                    value={selectedItem}
                                                    onChange={(e) => setSelectedItem(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Tất cả</option>
                                                    {EventSelect.map((Items) => (
                                                        <option key={Items.id} value={Items.id}>
                                                            {Items.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Thông tin</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='EvtList-Edit-item'>
                                                <img src={ImageHold} alt='Hình' className='EvtList-image' />
                                                <div className='EvtList-info-container'>
                                                    <div className='EvtList-title-EvtList'>
                                                        <p>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</p>
                                                    </div>
                                                    <div className='EvtList-Description'>
                                                        <p>trong giải đấu văn học của tỉnh bình dương đang diển ra sôi nổi hiện nay ta có thể thấy được sự cố gắng của từng tuyển thủ trong giải đấu, ngay tại trong vòng chung kết</p>
                                                    </div>
                                                    <div className='info-EvtList'>
                                                        <span>Người đăng: Lê Văn Chung</span>
                                                        <span>Ngày Đăng: 20/07/2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='EvtList-button'>
                                                <button style={{ backgroundColor: "red", color: "white" }}>Xóa</button>
                                                <button style={{ backgroundColor: "green", color: "white" }}>sửa</button>
                                            </div>
                                        </td>

                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='userfoot'>
                <Foot />
            </div>
        </div>

    );
}
export default UserEventList;
