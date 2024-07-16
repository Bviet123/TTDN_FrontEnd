import React, { useState } from 'react';
import './AdminNews.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import NewsHidden from '../../../image/nav-icon.png';
import NewsAvatar from '../../../image/avatar-holder.jpeg';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';

function AdminNews() {
    const [EditorHint, setEditorHint] = useState(false);
    const [EditorDrop, setEditorDrop] = useState(false);
    return (
        <div class="wrapper">
            <div className='admin-container'>
                <div class='admin-sidebar' style={{ display: EditorHint ? 'none' : 'block' }}>
                    <Aside />
                </div>
                <div class="main-panel">
                    <div className='body-nav-container'>
                        <div>
                            <img
                                className="picHidden"
                                src={NewsHidden}
                                alt="my pic"
                                onClick={() => setEditorHint(!EditorHint)}
                            />
                        </div>
                        <div className='container-admin-form' id="container-login-form">
                            <div className='AccountAvatar'>
                                <img src={NewsAvatar} alt="User holder imgage" onClick={() => setEditorDrop(!EditorDrop)} className='AdminHolder' />
                                <span className="admin-nav-name">username</span>
                            </div>
                            <div className='Accountdrop' style={{ display: EditorDrop ? 'flex' : 'none' }}>
                                <span><a href='UserEditor'>Tạo bài viết</a></span>
                                <span><a href='UserInfo'>Thông tin</a></span>
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                    <div class="container-admin-table">
                        <div class="page-inner">
                            <div className='create-blog'>
                                <div className='EvenName'>
                                    <p>Content:</p>
                                    <input type='text' className='input-layout' placeholder='Content' required />
                                </div>
                                <div className='EvenName'>
                                    <p>Title:</p>
                                    <input type='text' className='input-layout' placeholder='Tiêu đề' required />
                                </div>
                                <div className='EvenName'>
                                    <p>Tác giả:</p>
                                    <input type='text' className='input-layout' placeholder='Tác giả' required />
                                </div>
                                <div className='editor'>
                                    <p>Nội dung:</p>
                                    <FroalaEditor />
                                </div>
                                <div className='btn-post'>
                                    <span>Đăng bài</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNews;