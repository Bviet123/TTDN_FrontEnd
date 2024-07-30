import React, { useRef, useState } from 'react';
import './UpdateEditor.css';
import Aside from '../../../../component-admin/admin-aside/Aside';
import IconHidden from '../../../../image/nav-icon.png';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import ImageEditor from '../../../../image/PlayHolder.png';

import {
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle,
    FaPlusCircle
} from 'react-icons/fa';

function UpdateEditor() {
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
        <div class="UpEdit-wrapper">

            <div class='UpEdit-sidebar' style={{ display: EditorHint ? 'none' : 'block' }}>
                <Aside />
            </div>
            <div class="UpEdit-main-panel">
                <div className='UpEdit-body-nav-container'>
                    <div>
                        <img
                            className="UpEdit-picHidden"
                            src={IconHidden}
                            alt="my pic"
                            onClick={() => setEditorHint(!EditorHint)}
                        />
                    </div>
                    <div className='UpEdit-container-admin-form'>
                        <div className='UpEdit-form'>
                            <input type='text' placeholder='TÌm kiếm .....' className='UpEdit-input' />
                            <button className='UpEdit-admin-submit'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="UpEdit-container-admin-table">
                    <div class="UpEdit-page-inner">
                        <div className='UpEdit-create-blog'>
                            <div className='UpEdit-shower-container'>
                                <span onClick={() => setAdminFileHInt(!AdminFileHInt)} >Tệp tài liệu  </span>
                            </div>
                            <div>
                                <div className='UpEdit-Image-Container'>
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
                            <div className='UpEdit-EvenName'>
                                <div className='UpEdit-Name'>
                                    <p>Tên sự kiện:</p>
                                    <input type='text' className='UpEdit-input-layout' placeholder='Nhập tên sự kiện' required />
                                </div>
                                <div className='UpEdit-ID'>
                                    <p>Mã sự kiện:</p>
                                    <input type='text' className='UpEdit-input-layout' placeholder='Mã sự kiện' required />
                                </div>
                                <div className='UpEdit-ID'>
                                    <p>Số người:</p>
                                    <input type='number' className='UpEdit-input-layout' placeholder='Số người'/>
                                </div>
                            </div>
                            <div className='UpEdit-Speaker'>
                                <div className='Speaker-UpEdit'>
                                    <p>Diễn giả</p>
                                    <FaPlusCircle color={{ backgroundColor: 'red' }} size={25} />
                                </div>
                                <select
                                    className='UpEdit-input-layout'
                                    value={selectedSpeaker}
                                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                                    required
                                >
                                    <option value="">Chọn diễn giả</option>
                                    {speakers.map((speaker) => (
                                        <option key={speaker.id} value={speaker.id}>
                                            {speaker.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='UpEdit-Speaker'>
                                <div className='Speaker-UpEdit'>
                                    <p>Địa điểm</p>
                                    
                                </div>
                                <select
                                    className='UpEdit-input-layout'
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
                            <div className='UpEdit-radio-container'>
                                <p>Thể loại :</p>
                                <div className='UpEdit-radio-div'>
                                    <input type="radio" id="Admin-radio-seminar" name="size" value="Seminar" />
                                    <label for="radio-seminar">Hội nghị</label>
                                    <input type="radio" id="Admin-radio-conference" name="size" value="conference" />
                                    <label for="radio-conference">Hội Thảo</label>
                                    <input type="radio" id="Admin-radio-competiton" name="size" value="conference" />
                                    <label for="radio-competiton">Hội Thi</label>
                                </div>
                            </div>
                            <div className='UpEdit-editor'>
                                <p>Nội dung:</p>
                                <div className="froala-editor-container">
                                    <FroalaEditor />
                                </div>

                            </div>
                            <div className='UpEdit-btn-post'>
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
                        <div className='UpEdit-file-select' style={{ display: AdminFileHInt ? 'block' : 'none' }}>
                            <input
                                type="file"
                                onChange={handleAdminFileChange}
                                accept=".doc,.docx,.pdf"
                                style={{ display: 'none' }}
                                id="custom-file-input"
                                multiple
                            />
                            <label htmlFor="custom-file-input" className='UpEdit-file-selector'>
                                Chọn file
                            </label>
                            {AdminFiles.length > 0 && (
                                <div style={{ marginTop: '20px' }}>
                                    {AdminFiles.map((file, index) => (
                                        <div key={index} className='UpEdit-file-item'>
                                            {getAdminFileIcon(file.name)}
                                            <span className='UpEdit-file-Name'>{file.name}</span>
                                            <FaTimesCircle
                                                onClick={() => AdminRemoveFile(index)}
                                                className='UpEdit-delete-icon'
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

export default UpdateEditor;