import React, { useState } from 'react';
import './AdminAddNews.css';
import Aside from '../../../../component-admin/admin-aside/Aside';
import NewsHidden from '../../../../image/nav-icon.png';
import NewsImage from '../../../../image/PlayHolder.png';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { FaPlusCircle } from 'react-icons/fa';

function AdminAddNews() {
    const [EditorHint, setEditorHint] = useState(false);
    const [catalogs, setCatalogs] = useState([
        { id: 1, name: 'Danh mục 1' },
        { id: 2, name: 'Danh mục 2' },
        { id: 3, name: 'Danh mục 3' },

    ]);
    const [selectedCatalog, setSelectedCatalog] = useState('');

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
                            src={NewsHidden}
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
                    <div class="Admin-page-inner">
                        <div className='Admin-create-blog'>
                            <div className='Admin-NewsImage'>
                                <div >
                                    <img src={NewsImage} alt='Ảnh tin tức' />
                                    <button>Sửa ảnh</button>
                                </div>
                            </div>
                            <div className='Admin-NewsName'>
                                <p>Tên sự kiện:</p>
                                <input type='text' placeholder='Tên sự kiện' />
                            </div>
                            <div className='Admin-NewsName'>
                                <div className='Add-catalog'>
                                    <p>Danh mục</p>
                                    <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                                </div>
                                <select
                                    className='Catalog-input'
                                    value={selectedCatalog}
                                    onChange={(e) => setSelectedCatalog(e.target.value)}
                                    required
                                >
                                    <option value="">Chọn danh mục</option>
                                    {catalogs.map((Catalog) => (
                                        <option key={Catalog.id} value={Catalog.id}>
                                            {Catalog.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='Admin-editor'>
                                <p>Nội dung:</p>
                                <div className="froala-editor-container">
                                    <FroalaEditor />
                                </div>
                            </div>
                            <div className='Admin-btn-post'>
                                <button>Đăng bài</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminAddNews;