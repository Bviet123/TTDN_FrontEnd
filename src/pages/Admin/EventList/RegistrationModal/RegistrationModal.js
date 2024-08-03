import React from 'react';
import './RegistrationModal.css'; 

function RegistrationModal({ show, onClose, registrations }) {
  if (!show) return null;

  return (
    <div className="registration-modal-overlay">
      <div className="registration-modal">
        <div className="registration-modal-header">
          <h2>Danh sách đăng ký</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="registration-modal-body">
          <table className="registration-table">
            <thead>
              <tr>
                <th className="stt-column">STT</th>
                <th>Tên</th>
                <th className="regisDay-column">Ngày đăng ký</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, index) => (
                <tr key={reg.id}>
                  <td className="stt-column">{index + 1}</td>
                  <td>{reg.name}</td>
                  <td className="regisDay-column">{new Date(reg.registerDate).toLocaleDateString('vi-VN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;