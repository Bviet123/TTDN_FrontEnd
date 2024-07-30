import React, { useState, useEffect } from 'react';
import './LocationModal.css';
import ConfirmModal from '../../../../component-modal/ConfirmModal/ConfirmModal';

function LocationModal({ show, onClose, locations, onAdd, onEdit, onDelete }) {
    const [newLocation, setNewLocation] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        setFilteredLocations(
            locations.filter(location =>
                location.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [locations, searchTerm]);

    if (!show) return null;

    const handleSubmit = () => {
        if (newLocation.trim() !== '') {
            if (editingId !== null) {
                onEdit(editingId, newLocation);
                setEditingId(null);
            } else {
                onAdd(newLocation);
            }
            setNewLocation('');
        }
    };

    const startEditing = (location) => {
        setEditingId(location.id);
        setNewLocation(location.name);
    };

    const confirmDelete = (id) => {
        setDeletingId(id);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(deletingId);
        setShowConfirmModal(false);
    };

    return (
        <div className="modal-location">
            <div className="modal-location-content">
                <h2>Quản lý địa điểm</h2>
                <div className="location-input">
                    <input
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder={editingId !== null ? "Sửa địa điểm" : "Nhập địa điểm mới"}
                    />
                    <button onClick={handleSubmit} className='modal-location-add'>
                        {editingId !== null ? 'Cập nhật' : 'Thêm'}
                    </button>
                </div>
                <div className="search-input">
                    <text>Tìm kiếm </text>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Tìm kiếm địa điểm"
                    />
                </div>
                <ul className="location-list">
                    {filteredLocations.map(location => (
                        <li key={location.id}>
                            {location.name}
                            <div>
                                <button onClick={() => startEditing(location)} className='modal-location-fix'>Sửa</button>
                                <button onClick={() => confirmDelete(location.id)} className='modal-location-delete'>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="close-button" onClick={onClose}>Đóng</button>
            </div>
            <ConfirmModal
                show={showConfirmModal}
                message="Bạn có chắc chắn muốn xóa địa điểm này?"
                onConfirm={handleConfirmDelete}
                onCancel={() => setShowConfirmModal(false)}
            />
        </div>
    );
}

export default LocationModal;