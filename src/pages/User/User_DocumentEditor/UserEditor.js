import React from 'react';
import './UserEditor.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
function UserEditor() {
    return (
        <div className='Edit-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-user-container'>
                <div className='Editor-aside'>
                    <UserAside />
                </div>
                <div className='editor-container'>
                    <div className='create-blog'>
                        <div className='EvenName'>
                            <p>Tên sự kiện:</p>
                            <input type='text' className='input-layout' placeholder='Nhập tên sự kiện' required/>
                        </div>
                        <div className='EvenName'>
                            <p>Speaker:</p>
                            <input type='text' className='input-layout' placeholder='speaker' required/>
                        </div>
                        <div className='radio-container'>
                            <p>Thể loại :</p>
                            <div className='radio-div'>
                                <input type="radio" id="radio-news" name="size" value="News" />
                                <label for="radio-news">Tin tức</label>
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
                            <input type='file'/>
                        </div>
                        <div className='btn-post'>
                            <span>Đăng bài</span>
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
export default UserEditor;
