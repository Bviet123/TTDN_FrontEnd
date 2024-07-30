import React, { useRef, useState } from 'react';
import './SliderEdit.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconSlider from '../../../image/nav-icon.png';
import SliderImage from '../../../image/PlayHolder.png';
import EditModal from './EditModal/EditModal';

function SliderEdit() {
    const [EditorHint, setEditorHint] = useState(false);
    const [images, setImages] = useState([
        { src: SliderImage, name: 'Ảnh mặc định', link: '#' }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingImage, setEditingImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages([...images, { src: e.target.result }]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = (index) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa ảnh này không?')) {
            const newImages = images.filter((_, i) => i !== index);
            setImages(newImages);
        }
    };

    const handleEditImage = (index) => {
        setEditingImage({ ...images[index], index });
        setIsModalOpen(true);
    };

    const handleSaveEdit = (editedImage) => {
        const newImages = [...images];
        newImages[editedImage.index] = {
            src: editedImage.src,
            name: editedImage.name,
            link: editedImage.link
        };
        setImages(newImages);
        setIsModalOpen(false);
        setEditingImage(null);
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
                            src={IconSlider}
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
                    <div class="Admin-news-inner">
                        <div>
                            <table id='table-slider'>
                                <thead>
                                    <tr>
                                        <th colSpan="5">
                                            <div className='add-pic-slider'>
                                                <input
                                                    type="file"
                                                    id="imageInput"
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={handleAddImage}
                                                />
                                                <span>Bảng hình silder</span>
                                                <button
                                                    style={{ backgroundColor: "blue", color: "white" }}
                                                    onClick={() => document.getElementById('imageInput').click()}
                                                >
                                                    Thêm ảnh
                                                </button>
                                            </div>
                                        </th>

                                    </tr>
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>Tên</th>
                                        <th>Đường dẫn</th>
                                        <th>Thao tác</th>
                                        <th>Chấp nhận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {images.map((image, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={image.src} alt='Hình' className='slider-images' />
                                            </td>
                                            <td>
                                                <div className='Limit-container'>
                                                    <span className='slider-Name'>{image.name}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='Limit-container'>
                                                    <a href={image.link} className='Silder-link'>{image.link}</a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='slider-button'>
                                                    <span
                                                        style={{ backgroundColor: "red", color: "white", cursor: "pointer" }}
                                                        onClick={() => handleDeleteImage(index)}
                                                    >
                                                        Xóa
                                                    </span>

                                                    <span
                                                        style={{ backgroundColor: "green", color: "white", cursor: "pointer" }}
                                                        onClick={() => handleEditImage(index)}
                                                    >
                                                        Sửa
                                                    </span>

                                                </div>
                                            </td>
                                            <td>
                                                <input type='checkbox' />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <EditModal
                    image={editingImage}
                    onSave={handleSaveEdit}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default SliderEdit;