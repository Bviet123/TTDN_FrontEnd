import React, { useRef, useState } from 'react';
import './UserUpNews.css';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import IconHint from '../../../../image/nav-icon.png';
import PlaceImage from '../../../../image/PlayHolder.png';
import UserAside from '../../../../component-user/User-Aside/UserAside';
import Nav from '../../../../component-news/NavigationBar/Nav';
import Foot from '../../../../component-news/FootContainer/Foot';

import {
    FaPlusCircle
} from 'react-icons/fa';


function UserUpdateNews() {
    const [UpNewsHint, setUpNewsHint] = useState(false);
    const [Newscatalogs, setNewscatalogs] = useState([
        { id: 1, name: 'Danh mục 1' },
        { id: 2, name: 'Danh mục 2' },
        { id: 3, name: 'Danh mục 3' },

    ]);
    const [selectedNews, setSelectedNews] = useState('');

    return (
        <div className='Update-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-NewsUp-container'>
                <div className='NewsUp-aside' style={{ display: UpNewsHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='NewsUp-container'>
                    <div className='NewsUp-create-blog'>
                        <img
                            className="NewsUp-picHint"
                            src={IconHint}
                            alt="my hint picture"
                            onClick={() => setUpNewsHint(!UpNewsHint)}
                        />
                        <div className='NewsUp-NewsImage'>
                            <div >
                                <img src={PlaceImage} alt='Ảnh tin tức' />
                                <button>Sửa ảnh</button>
                            </div>
                        </div>
                        <div className='NewsUp-NewsName'>
                            <p>Tên sự kiện:</p>
                            <input type='text' placeholder='Tên sự kiện' />
                        </div>
                        <div className='NewsUp-NewsName'>
                            <div className='NewsUp-catalog'>
                                <p>Danh mục</p>
                                <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                            </div>
                            <select
                                className='NewsUp-Catalog-input'
                                value={selectedNews}
                                onChange={(e) => setSelectedNews(e.target.value)}
                                required
                            >
                                <option value="">Chọn danh mục</option>
                                {Newscatalogs.map((Item) => (
                                    <option key={Item.id} value={Item.id}>
                                        {Item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='NewsUp-editor'>
                            <p>Nội dung:</p>
                            <div className="froala-editor-container">
                                <FroalaEditor />
                            </div>
                        </div>
                        <div className='NewsUp-btn-post'>
                            <button>Đăng bài</button>
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
export default UserUpdateNews;
