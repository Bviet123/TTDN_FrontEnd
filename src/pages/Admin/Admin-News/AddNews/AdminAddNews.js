import React, { useState } from 'react';
import './AdminAddNews.css';
import Aside from '../../../../component-admin/admin-aside/Aside';
import NewsIconHidden from '../../../../image/nav-icon.png';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

function AdminAddNewsEditor() {
    const [NewsEditorHint, setNewsEditorHint] = useState(false);
    return (
        <div className="Admin-wrapper" style={{ display: 'flex', height: '100vh' }}>
            <div className='Admin-sidebar' style={{ display: NewsEditorHint ? 'none' : 'block' }}>
                <Aside />
            </div>
            <div className="Admin-main-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div className='Admin-body-nav-container'>
                    <div>
                        <img
                            className="Admin-picHidden"
                            src={NewsIconHidden}
                            alt="my pic"
                            onClick={() => setNewsEditorHint(!NewsEditorHint)}
                        />
                    </div>
                    <div className='Admin-container-admin-form'>
                        <div className='Admin-form'>
                            <input type='text' placeholder='TÌm kiếm .....' className='Admin-input' />
                            <button className='Admin-admin-submit'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <div className="Admin-container-admin-table" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div className="Admin-page-inner froala-editor-container" style={{ flex: 1, overflow: 'hidden' }}>
                        <FroalaEditor />
                    </div>
                    <button>Đăng bài</button>
                </div>
            </div>
        </div>


    );
}

export default AdminAddNewsEditor;