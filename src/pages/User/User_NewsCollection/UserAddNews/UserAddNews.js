import React, { useRef, useState } from 'react';
import './UserAddNews.css';
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
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle,
    FaPlusCircle
} from 'react-icons/fa';


function UserAddNews() {
    const [AddNewsHint, setAddNewsHint] = useState(false);
    const [Newscatalogs, setNewscatalogs] = useState([
        { id: 1, name: 'Danh mục 1' },
        { id: 2, name: 'Danh mục 2' },
        { id: 3, name: 'Danh mục 3' },

    ]);
    const [selectedNews, setSelectedNews] = useState('');

    return (
        <div className='Add-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-NewsAdd-container'>
                <div className='NewsAdd-aside' style={{ display: AddNewsHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='NewsAdd-container'>
                    <div className='NewsAdd-create-blog'>
                        <img
                            className="NewsAdd-picHint"
                            src={IconHint}
                            alt="my hint picture"
                            onClick={() => setAddNewsHint(!AddNewsHint)}
                        />
                        <div className='NewsAdd-NewsImage'>
                            <div >
                                <img src={PlaceImage} alt='Ảnh tin tức' />
                                <button>Sửa ảnh</button>
                            </div>
                        </div>
                        <div className='NewsAdd-NewsName'>
                            <p>Tên sự kiện:</p>
                            <input type='text' placeholder='Tên sự kiện' />
                        </div>
                        <div className='NewsAdd-NewsName'>
                            <div className='NewsAdd-catalog'>
                                <p>Danh mục</p>
                                <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                            </div>
                            <select
                                className='NewsAdd-Catalog-input'
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
                        <div className='NewsAdd-editor'>
                            <p>Nội dung:</p>
                            <div className="froala-editor-container">
                                <FroalaEditor />
                            </div>
                        </div>
                        <div className='NewsAdd-btn-post'>
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
export default UserAddNews;
