import React, { useRef, useState } from 'react';
import './UserUpdateEditor.css';
import Nav from '../../../../component-news/NavigationBar/Nav';
import Foot from '../../../../component-news/FootContainer/Foot';
import UserAside from '../../../../component-user/User-Aside/UserAside';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import IconHint from '../../../../image/nav-icon.png';
import PlaceImage from '../../../../image/PlayHolder.png';

import {
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle,
} from 'react-icons/fa';


function UserUpdateEditor() {
    const [UserHint, setUserHint] = useState(false);
    const [FileHint, setFileHint] = useState(false);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [speakerUser, setSpeakerUser] = useState([
        { id: 1, name: 'Diễn giả 1' },
        { id: 2, name: 'Diễn giả 2' },
        { id: 3, name: 'Diễn giả 3' },

    ]);
    const [selectSpeakerUser, setSelectSpeakerUser] = useState('');

    const [locationUser, setLocationUser] = useState([
        { id: 1, name: 'Địa điểm 1' },
        { id: 2, name: 'Địa điểm 2' },
        { id: 3, name: 'Địa điểm 3' },

    ]);
    const [selectLocationUser, setSelectLocationUser] = useState('');

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
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
                return <FaFileWord color="#2b579a" size={30} />;
            case 'pdf':
                return <FaFilePdf color="#f40f02" size={30} />;
            default:
                return <FaFileAlt color="#8c8c8c" size={30} />;
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
        <div className='Update-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-UpEdit-container'>
                <div className='UpEdit-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='UpEdit-container'>
                    <div className='UpEdit-create-blog'>
                        <div className='UpEdit-shower-container'>
                            <img
                                className="UpEdit-picHint"
                                src={IconHint}
                                alt="my hint picture"
                                onClick={() => setUserHint(!UserHint)}
                            />
                            <div>
                                <span onClick={() => setFileHint(!FileHint)} >Tệp tài liệu  </span>

                            </div>
                        </div>
                        <div>
                            <div className='UpEdit-Image-Container'>
                                <img src={selectedImage || PlaceImage} alt="Selected" style={{ width: '200px', height: '200px' }} />
                                <button onClick={handleImageClick}>Chọn ảnh</button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                        <div className='UpEdit-EvenName'>
                            <div className='UpEdit-Event-Name'>
                                <p>Tên sự kiện:</p>
                                <input type='text' className='UpEdit-input-layout' placeholder='Nhập tên sự kiện' required />
                            </div>
                            <div className='UpEdit-ID'>
                                <p>Mã sự kiện:</p>
                                <input type='text' className='UpEdit-input-layout' placeholder='Mã sự kiện' required />
                            </div>
                            <div className='UpEdit-ID'>
                                <p>Số người:</p>
                                <input type='number' className='UpEdit-input-layout' placeholder='Số người' />
                            </div>
                        </div>
                        <div>
                            <p>Diễn giả:</p>
                            <select
                                className='UpEdit-select'
                                value={selectSpeakerUser}
                                onChange={(e) => setSelectSpeakerUser(e.target.value)}
                                required
                            >
                                <option value="">Chọn diễn giả</option>
                                {speakerUser.map((speak) => (
                                    <option key={speak.id} value={speak.id}>
                                        {speak.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>Địa điểm:</p>
                            <select
                                className='UpEdit-select'
                                value={selectLocationUser}
                                onChange={(e) => setSelectLocationUser(e.target.value)}
                                required
                            >
                                <option value="">Chọn địa điểm</option>
                                {locationUser.map((Loca) => (
                                    <option key={Loca.id} value={Loca.id}>
                                        {Loca.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='UpEdit-radio-container'>
                            <p>Thể loại :</p>
                            <div className='UpEdit-radio-div'>
                                <input type="radio" id="radio-seminar" name="size" value="Seminar" />
                                <label for="radio-seminar">Hội nghị</label>
                                <input type="radio" id="radio-conference" name="size" value="conference" />
                                <label for="radio-conference">Hội Thảo</label>
                                <input type="radio" id="radio-competiton" name="size" value="conference" />
                                <label for="radio-competiton">Hội Thi</label>
                            </div>
                        </div>
                        <div className='UpEdit-editor'>
                            <p>Nội dung:</p>
                            <FroalaEditor />
                        </div>
                        <div className='UpEdit-btn-post'>
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
                        <label htmlFor="custom-file-input" className='UpEdit-file-selector'>
                            Chọn file
                        </label>
                        {files.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                                {files.map((file, index) => (
                                    <div key={index} className='UpEdit-file-item'>
                                        {getFileIcon(file.name)}
                                        <span className='file-Name'>{file.name}</span>
                                        <FaTimesCircle
                                            onClick={() => removeFile(index)}
                                            className='UpEdit-delete-icon'
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
export default UserUpdateEditor;
