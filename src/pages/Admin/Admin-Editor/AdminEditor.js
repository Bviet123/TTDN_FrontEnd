import React, { useRef, useState } from 'react';
import './AdminEditor.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../image/nav-icon.png';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import ImageEditor from '../../../image/PlayHolder.png';

import {
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle,
    FaPlusCircle
} from 'react-icons/fa';

function AdminEditor() {
    const [EditorHint, setEditorHint] = useState(false);
    const [AdminFileHInt, setAdminFileHInt] = useState(false);
    const [AdminFiles, setAdminFiles] = useState([]);
    const [AdminError, setAdminError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [speakers, setSpeakers] = useState([
        { id: 1, name: 'Diễn giả 1' },
        { id: 2, name: 'Diễn giả 2' },
        { id: 3, name: 'Diễn giả 3' },
        // Thêm các diễn giả khác nếu cần
    ]);
    const [locations, setLocations] = useState([
        { id: 1, name: 'Địa điểm 1' },
        { id: 2, name: 'Địa điểm 2' },
        { id: 3, name: 'Địa điểm 3' },

    ]);
    const [selectedSpeaker, setSelectedSpeaker] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

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

    const handleAdminFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const allowedExtensions = ['doc', 'docx', 'pdf'];

        const validFiles = selectedFiles.filter(file => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedExtensions.includes(fileExtension);
        });

        if (validFiles.length < selectedFiles.length) {
            setAdminError('Một số file không hợp lệ. Chỉ chấp nhận các định dạng phổ biến.');
        } else {
            setAdminError('');
        }

        setAdminFiles(prevFiles => [...prevFiles, ...validFiles]);
    };
    // hàm lấy icon file theo đuôi file
    const getAdminFileIcon = (fileName) => {
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
    const AdminRemoveFile = (index) => {
        setAdminFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };
    //hàm đăng bài
    const handleAdminSubmit = () => {
        //ghi code của button đăng bài vào đây nha a trung
    };

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
                            src={IconHidden}
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
                            <div className='Admin-shower-container'>
                                <span onClick={() => setAdminFileHInt(!AdminFileHInt)} >Tệp tài liệu  </span>
                            </div>
                            <div>
                                <div className='Edit-Image-Container'>
                                    <img src={selectedImage || ImageEditor} alt="Selected" style={{width: '200px', height: '200px'}} />
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
                            <div className='Admin-EvenName'>
                                <div className='Event-Name'>
                                    <p>Tên sự kiện:</p>
                                    <input type='text' className='Admin-input-layout' placeholder='Nhập tên sự kiện' required />
                                </div>
                                <div className='Event-ID'>
                                    <p>Mã sự kiện:</p>
                                    <input type='text' className='Admin-input-layout' placeholder='Mã sự kiện' required />
                                </div>
                                <div className='Event-ID'>
                                    <p>Số người:</p>
                                    <input type='number' className='Admin-input-layout' placeholder='Số người'/>
                                </div>
                            </div>
                            <div className='EvenName'>
                                <div className='Speaker-add'>
                                    <p>Diễn giả</p>
                                    <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                                </div>
                                <select
                                    className='Admin-input-layout'
                                    value={selectedSpeaker}
                                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                                    required
                                >
                                    <option value="">Chọn diễn giả</option>
                                    {speakers.map((speaker) => (
                                        <option key={speaker.id} value={speaker.id} className='speaker-options'>
                                            {speaker.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='EvenName'>
                                <div className='Speaker-add'>
                                    <p>Địa điểm</p>
                                    
                                </div>
                                <select
                                    className='Admin-input-layout'
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    required
                                >
                                    <option value="">Chọn địa điểm</option>
                                    {locations.map((local) => (
                                        <option key={local.id} value={local.id} >
                                            {local.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='Admin-radio-container'>
                                <p>Thể loại :</p>
                                <div className='Admin-radio-div'>
                                    <input type="radio" id="Admin-radio-seminar" name="size" value="Seminar" />
                                    <label for="radio-seminar">Hội nghị</label>
                                    <input type="radio" id="Admin-radio-conference" name="size" value="conference" />
                                    <label for="radio-conference">Hội Thảo</label>
                                    <input type="radio" id="Admin-radio-competiton" name="size" value="conference" />
                                    <label for="radio-competiton">Hội Thi</label>
                                </div>
                            </div>
                            <div className='Admin-editor'>
                                <p>Nội dung:</p>
                                <div className="froala-editor-container">
                                    <FroalaEditor />
                                </div>

                            </div>
                            <div className='Admin-btn-post'>
                                <button
                                    onClick={handleAdminSubmit}
                                    disabled={!AdminFiles}
                                    style={{
                                        backgroundColor: AdminFiles.length > 0 ? '#4CAF50' : '#ddd',
                                        color: AdminFiles.length > 0 ? 'white' : '#666',
                                        cursor: AdminFiles.length > 0 ? 'pointer' : 'not-allowed'
                                    }}>
                                    Đăng bài
                                </button>
                            </div>
                        </div>
                        <div className='Admin-file-select' style={{ display: AdminFileHInt ? 'block' : 'none' }}>
                            <input
                                type="file"
                                onChange={handleAdminFileChange}
                                accept=".doc,.docx,.pdf"
                                style={{ display: 'none' }}
                                id="custom-file-input"
                                multiple
                            />
                            <label htmlFor="custom-file-input" className='file-selector'>
                                Chọn file
                            </label>
                            {AdminFiles.length > 0 && (
                                <div style={{ marginTop: '20px' }}>
                                    {AdminFiles.map((file, index) => (
                                        <div key={index} className='file-item'>
                                            {getAdminFileIcon(file.name)}
                                            <span className='file-Name'>{file.name}</span>
                                            <FaTimesCircle
                                                onClick={() => AdminRemoveFile(index)}
                                                className='delete-icon'
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {AdminError && <p style={{ color: 'red' }}>{AdminError}</p>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminEditor;