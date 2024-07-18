import React, { useState } from 'react';
import './UserEditor.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import IconHint from '../../../image/nav-icon.png';
import {
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle
} from 'react-icons/fa';


function UserEditor() {
    const [UserHint, setUserHint] = useState(false);
    const [FileHint, setFileHint] = useState(false);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const allowedExtensions = ['doc', 'docx', 'pdf'];

        const validFiles = selectedFiles.filter(file => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedExtensions.includes(fileExtension);
        });

        if (validFiles.length < selectedFiles.length) {
            setError('Một số file không hợp lệ. Chỉ chấp nhận các định dạng phổ biến.');
        } else {
            setError('');
        }

        setFiles(prevFiles => [...prevFiles, ...validFiles]);
    };
    // hàm lấy icon file theo đuôi file
    const getFileIcon = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'doc':
            case 'docx':
                return <FaFileWord color="#2b579a" size={50} />;
            case 'pdf':
                return <FaFilePdf color="#f40f02" size={50} />;
            default:
                return <FaFileAlt color="#8c8c8c" size={50} />;
        }
    };
    //hàm xóa item file
    const removeFile = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };
    //hàm đăng bài
    const handleSubmit = () => {
        //ghi code của button đăng bài vào đây nha a trung
    };

    return (
        <div className='Edit-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-user-container'>
                <div className='Editor-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='editor-container'>
                    <div className='create-blog'>
                        <div className='shower-container'>
                            <img
                                className="picHint"
                                src={IconHint}
                                alt="my hint picture"
                                onClick={() => setUserHint(!UserHint)}
                            />
                            <span onClick={() => setFileHint(!FileHint)} >Tệp tài liệu  </span>
                        </div>
                        <div className='EvenName'>
                            <p>Tên sự kiện:</p>
                            <input type='text' className='input-layout' placeholder='Nhập tên sự kiện' required />
                        </div>
                        <div className='EvenName'>
                            <p>Diễn giả:</p>
                            <input type='text' className='input-layout' placeholder='diễn giả' required />
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
                        <div className='btn-post'>
                            <button
                                onClick={handleSubmit}
                                disabled={!files}
                                style={{
                                    backgroundColor: files.length > 0 ? '#4CAF50' : '#ddd',
                                    color: files.length > 0 ? 'white' : '#666',
                                    cursor: files.length > 0 ? 'pointer' : 'not-allowed'
                                }}>
                                Đăng bài
                            </button>
                        </div>
                    </div>
                    <div className='file-select' style={{ display: FileHint ? 'block' : 'none' }}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif"
                            style={{ display: 'none' }}
                            id="custom-file-input"
                            multiple
                        />
                        <label htmlFor="custom-file-input" className='file-selector'>
                            Chọn file
                        </label>
                        {files.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                                {files.map((file, index) => (
                                    <div key={index} className='file-item'>
                                        {getFileIcon(file.name)}
                                        <span className='file-Name'>{file.name}</span>
                                        <FaTimesCircle
                                            onClick={() => removeFile(index)}
                                            className='delete-icon'
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
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
