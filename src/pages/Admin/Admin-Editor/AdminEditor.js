import React, { useState } from 'react';
import './AdminEditor.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import AdminAvatar from '../../../image/avatar-holder.jpeg';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';

function AdminEditor() {
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
                                src={IconHidden}
                                alt="my pic"
                                onClick={() => setEditorHint(!EditorHint)}
                            />
                        </div>
                        <div className='container-admin-form'>
                            <img src={AdminAvatar} alt="User holder imgage" onClick={() => setEditorDrop(!EditorDrop)} className='AdminHolder' />
                            <span id="admin-nav-name">username</span>
                            <div className='admin-form'>
                                <input type='text' placeholder='TÌm kiếm .....' className='admin-input' />
                                <button className='admin-submit'>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div class="container-admin-table">
                        <div class="page-inner">
                            <div className='create-blog'>
                                <div className='EvenName'>
                                    <p>Tên sự kiện:</p>
                                    <input type='text' className='input-layout' placeholder='Nhập tên sự kiện' required />
                                </div>
                                <div className='EvenName'>
                                    <p>Speaker:</p>
                                    <input type='text' className='input-layout' placeholder='speaker' required />
                                </div>
                                <div className='radio-container'>
                                    <p>Thể loại :</p>
                                    <div className='radio-div'>
                                        <input type="radio" id="radio-seminar" name="size" value="Seminar" />
                                        <label for="radio-seminar">Hội nghị</label>
                                        <input type="radio" id="radio-conference" name="size" value="conference" />
                                        <label for="radio-conference">Hội Thảo</label>
                                        <input type="radio" id="radio-competiton" name="size" value="conference" />
                                        <label for="radio-competiton">Hội Thi</label>
                                    </div>
                                </div>
                                <div className='editor'>
                                    <p>Nội dung:</p>
                                    <FroalaEditor />
                                </div>
                                <div className='file-container'>
                                    <p>Tệp tài liệu: </p>
                                    <input type='file' />
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

export default AdminEditor;