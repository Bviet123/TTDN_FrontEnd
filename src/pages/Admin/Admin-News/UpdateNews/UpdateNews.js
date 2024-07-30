import React, { useState } from 'react';
import './UpdateNews.css';
import Aside from '../../../../component-admin/admin-aside/Aside';
import NewsHidden from '../../../../image/nav-icon.png';
import NewsImage from '../../../../image/PlayHolder.png';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { FaPlusCircle } from 'react-icons/fa';

function UpdateNews() {
    const [EditorHint, setEditorHint] = useState(false);
    const [catalogs, setCatalogs] = useState([
        { id: 1, name: 'Danh mục 1' },
        { id: 2, name: 'Danh mục 2' },
        { id: 3, name: 'Danh mục 3' },

    ]);
    const [selectedCatalog, setSelectedCatalog] = useState('');

    return (
        <div class="Up-wrapper">

            <div class='Up-sidebar' style={{ display: EditorHint ? 'none' : 'block' }}>
                <Aside />
            </div>
            <div class="Up-main-panel">
                <div className='Up-body-nav-container'>
                    <div>
                        <img
                            className="Up-picHidden"
                            src={NewsHidden}
                            alt="my pic"
                            onClick={() => setEditorHint(!EditorHint)}
                        />
                    </div>
                    <div className='Up-container-admin-form'>
                        <div className='Up-form'>
                            <input type='text' placeholder='TÌm kiếm .....' className='Up-input' />
                            <button className='Up-admin-submit'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="Up-container-admin-table">
                    <div class="Up-page-inner">
                        <div className='Up-create-blog'>
                            <div className='Up-NewsImage'>
                                <div >
                                    <img src={NewsImage} alt='Ảnh tin tức' />
                                    <button>Sửa ảnh</button>
                                </div>
                            </div>
                            <div className='Up-NewsName'>
                                <p>Tên sự kiện:</p>
                                <input type='text' placeholder='Tên sự kiện' />
                            </div>
                            <div className='Up-NewsName'>
                                <div className='Up-catalog'>
                                    <p>Danh mục</p>
                                    <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                                </div>
                                <select
                                    className='Up-Catalog-input'
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
                            <div className='Up-editor'>
                                <p>Nội dung:</p>
                                <div className="froala-editor-container">
                                    <FroalaEditor />
                                </div>
                            </div>
                            <div className='Up-btn-post'>
                                <button>Đăng bài</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UpdateNews;