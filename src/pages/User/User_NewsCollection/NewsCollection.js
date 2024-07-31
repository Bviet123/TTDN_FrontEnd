import React, { useState } from 'react';
import './NewsCollection.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import ImageHold from '../../../image/PlayHolder.png';

function NewsCollection() {
    const [UserHint, setUserHint] = useState(false);
    const [ColectionSelect, setColectionSelect] = useState([
        { id: 1, name: 'Hội nghị' },
        { id: 2, name: 'Hội thảo' },
        { id: 3, name: 'Hội thi' },
        { id: 4, name: 'Tin tức' },
    ]);
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <div className='Collect-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='Collect-user-container'>
                <div className='Collect-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='Collect-container'>
                    <div className='Collect-create-blog'>
                        <div className='Collect-shower-container'>
                            <img
                                className="Collect-picHint"
                                src={UserIcon}
                                alt="my hint picture"
                                onClick={() => setUserHint(!UserHint)}
                            />
                            <div>
                                <span>Thêm tin</span>
                                <span>Thêm bài viết</span>
                            </div>
                        </div>
                        <div className='Collect-container'>
                            <div className='Collect-contact-container'>
                                <table>
                                    <tr>
                                        <th colSpan='2'>
                                            <div className='Collect-header-table'>
                                                <select
                                                    className='Collect-input-layout'
                                                    value={selectedItem}
                                                    onChange={(e) => setSelectedItem(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Tất cả</option>
                                                    {ColectionSelect.map((Items) => (
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
                                            <div className='Collect-Edit-item'>
                                                <img src={ImageHold} alt='Hình' className='Collect-image' />
                                                <div className='Collect-info-container'>
                                                    <div className='Collect-title-Collect'>
                                                        <span>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                                    </div>
                                                    <div className='info-Collect'>
                                                        <span>Người đăng: Lê Văn Chung</span>
                                                        <span>Ngày Đăng: 20/07/2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='Collect-button'>
                                                <span style={{ backgroundColor: "red", color: "white" }}>Xóa</span>
                                                <span style={{ backgroundColor: "green", color: "white" }}>sửa</span>
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
export default NewsCollection;
