import React, { useState } from 'react';
import './EditorColection.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import UserIcon from '../../../image/nav-icon.png';
import AvatarUser from '../../../image/PlayHolder.png'
import ImageUserEdit from '../../../image/PlayHolder.png'
import { FaTimesCircle } from 'react-icons/fa';



function UserColection() {
    const [UserHint, setUserHint] = useState(false);
    const [EditorSelect, setEditorSelect] = useState([
        { id: 1, name: 'Hội nghị' },
        { id: 2, name: 'Hội thảo' },
        { id: 3, name: 'Hội thi' },

    ]);
    const [selectedItem, setSelectedItem] = useState('');
    return (
        <div className='Editor-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='Editor-user-container'>
                <div className='Edit-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='Edit-container'>
                    <div className='Edit-create-blog'>
                        <div className='Edit-shower-container'>
                            <img
                                className="Edit-picHint"
                                src={UserIcon}
                                alt="my hint picture"
                                onClick={() => setUserHint(!UserHint)}
                            />
                        </div>
                        <div className='Edit-container'>
                            <div className='User-colection-container'>

                                <table>
                                    <tr>
                                        <th colSpan='2'>
                                            <div className='Edit-header-table'>
                                                <select
                                                    className='Edit-input-layout'
                                                    value={selectedItem}
                                                    onChange={(e) => setSelectedItem(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Tất cả</option>
                                                    {EditorSelect.map((Items) => (
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
                                            <div className='Admin-Edit-item'>
                                                <img src={ImageUserEdit} alt='Hình' className='Edit-image' />
                                                <div className='Edit-info-container'>
                                                    <div className='info-title-Edit'>
                                                        <span className='Edit-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                                    </div>
                                                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                                    <div className='info-Edit'>
                                                        <span>Người đăng: Lê Văn Chung</span>
                                                        <span>Ngày Đăng: 20/07/2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='Edit-button'>
                                                <FaTimesCircle className='Edit-delete-icon' size={30} />
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
export default UserColection;
