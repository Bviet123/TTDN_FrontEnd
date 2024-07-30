import React, { useRef, useState } from 'react';
import './EditModal.css'

function EditModal({ image, onSave, onClose }) {
    const [editedImage, setEditedImage] = useState(image);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedImage({ ...editedImage, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditedImage({ ...editedImage, src: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={editedImage.src} alt="Preview" style={{ Width: '100%' }} />
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageChange} 
                    style={{ display: 'none' }}
                />
                <button onClick={() => fileInputRef.current.click()} className='modal-button'>Chọn ảnh mới</button>
                <text>Tên ảnh:</text>
                <input 
                    type="text" 
                    name="name" 
                    value={editedImage.name} 
                    onChange={handleChange} 
                    placeholder="Tên ảnh"
                    className='modal-input'
                />
                <text>Đường dẫn:</text>
                <input 
                    type="text" 
                    name="link" 
                    value={editedImage.link} 
                    onChange={handleChange} 
                    placeholder="Đường dẫn"
                    className='modal-input'
                />
                <button onClick={() => onSave(editedImage)} className='modal-save'>Lưu</button>
                <button onClick={onClose} className='modal-out'>Hủy</button>
            </div>
        </div>
    );
}

export default EditModal;