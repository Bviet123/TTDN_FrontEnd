import React from 'react';
import './ConfirmModal.css';

function ConfirmModal({ show, message, onConfirm, onCancel }) {
    if (!show) return null;

    return (
        <div className="confirm-modal">
            <div className="confirm-modal-content">
                <p>{message}</p>
                <div className="confirm-modal-buttons">
                    <button onClick={onConfirm} id='btn-modal-confirm'>Xác nhận</button>
                    <button onClick={onCancel} id='btn-modal-turnoff'>Hủy</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;