import React, { useState, useEffect } from 'react';
import './CatagoryModal.css';
import ConfirmModal from '../../../../component-modal/ConfirmModal/ConfirmModal';

function CatagoryModal({ show, onClose, catagories = [], onAdd, onEdit, onDelete })  {
    const [newCatagory, setNewCatagory] = useState('');
    const [ediCataId, setEdiCataId] = useState(null);
    const [searchList, setSearchList] = useState('');
    const [filteredCatagories, setFilteredCatagories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteCataId, setDeleteCataId] = useState(null);

    useEffect(() => {
        if (Array.isArray(catagories)) {
            setFilteredCatagories(
                catagories.filter(catagory =>
                    catagory.name.toLowerCase().includes(searchList.toLowerCase())
                )
            );
        } else {
            setFilteredCatagories([]);
        }
    }, [catagories, searchList]);

    if (!show) return null;

    const handleSubmit = () => {
        if (newCatagory.trim() !== '') {
            if (ediCataId !== null) {
                onEdit(ediCataId, newCatagory);
                setEdiCataId(null);
            } else {
                onAdd(newCatagory);
            }
            setNewCatagory('');
        }
    };

    const startEditing = (catagory) => {
        setEdiCataId(catagory.id);
        setNewCatagory(catagory.name);
    };

    const confirmDelete = (id) => {
        setDeleteCataId(id);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(deleteCataId);
        setShowModal(false);
    };

    return (
        <div className="modal-catagory">
            <div className="modal-catagory-content">
                <h2>Quản lý địa điểm</h2>
                <div className="catagory-input">
                    <input
                        type="text"
                        value={newCatagory}
                        onChange={(e) => setNewCatagory(e.target.value)}
                        placeholder={ediCataId !== null ? "Sửa địa điểm" : "Nhập địa điểm mới"}
                    />
                    <button onClick={handleSubmit} className='modal-catagory-add'>
                        {ediCataId !== null ? 'Cập nhật' : 'Thêm'}
                    </button>
                </div>
                <div className="search-input">
                    <text>Tìm kiếm </text>
                    <input
                        type="text"
                        value={searchList}
                        onChange={(e) => setSearchList(e.target.value)}
                        placeholder="Tìm kiếm địa điểm"
                    />
                </div>
                <ul className="catagory-list">
                    {filteredCatagories.map(catagory => (
                        <li key={catagory.id}>
                            {catagory.name}
                            <div>
                                <button onClick={() => startEditing(catagory)} className='modal-catagory-fix'>Sửa</button>
                                <button onClick={() => confirmDelete(catagory.id)} className='modal-catagory-delete'>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="close-button" onClick={onClose}>Đóng</button>
            </div>
            <ConfirmModal
                show={showModal}
                message="Bạn có chắc chắn muốn xóa địa điểm này?"
                onConfirm={handleConfirmDelete}
                onCancel={() => setShowModal(false)}
            />
        </div>
    );
}

export default CatagoryModal;