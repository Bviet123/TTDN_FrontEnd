import React, { useState } from 'react';
import './EventList.css';
import Aside from '../../../component-admin/admin-aside/Aside';
import IconEvent from '../../../image/nav-icon.png';
import EventImage from '../../../image/PlayHolder.png';
import LocationModal from '../../Admin/EventList/LocationModal/LocationModal';
import RegistrationModal from './RegistrationModal/RegistrationModal';

function EventList() {
    const [EditorHint, setEditorHint] = useState(false);
    const [eventList, setEvenList] = useState([
        { id: 1, name: 'Hội nghị' },
        { id: 2, name: 'Hội thảo' },
        { id: 3, name: 'Hội thi' },

    ]);

    const [selectedList, setSelectedList] = useState('');

    //Location 
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [locations, setLocations] = useState([]);
    //Add location
    const handleAddLocation = (newLocation) => {
        setLocations([...locations, { id: Date.now(), name: newLocation }]);
    };
    //Edit location
    const handleEditLocation = (id, newName) => {
        setLocations(locations.map(location =>
            location.id === id ? { ...location, name: newName } : location
        ));
    };
    //Delete location
    const handleDeleteLocation = (id) => {
        setLocations(locations.filter(location => location.id !== id));
    };

    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [registrations, setRegistrations] = useState([
        { id: 1, name: 'Nguyễn Văn A sdsd sdsdsd sdsd', registerDate: '2024-08-01' },
        { id: 2, name: 'Trần Thị B', registerDate: '2024-08-02' },
    ]);
    // Show Registration List
    const handleOpenRegistrationModal = () => {
        setShowRegistrationModal(true);
    };


    return (
        <div class="Event-wrapper">

            <div class='Event-sidebar' style={{ display: EditorHint ? 'none' : 'block' }}>
                <Aside />
            </div>
            <div class="Event-main-panel">
                <div className='Event-body-nav-container'>
                    <div>
                        <img
                            className="Event-picHidden"
                            src={IconEvent}
                            alt="my pic"
                            onClick={() => setEditorHint(!EditorHint)}
                        />
                    </div>
                    <div className='Event-container-admin-form'>
                        <div className='Event-form'>
                            <input type='text' placeholder='TÌm kiếm .....' className='Event-input' />
                            <button className='Admin-admin-submit'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="Event-container-admin-table">
                    <div class="Admin-Event-inner">
                        <table id='Event-table'>
                            <tr>
                                <th colSpan='4'>
                                    <div className='header-table'>
                                        <div>
                                            <button className='Event-AddLocation' onClick={() => setShowLocationModal(true)}>Địa điểm</button>
                                            <button className='Event-AddNews'>Thêm tin</button>
                                        </div>
                                        <select
                                            className='Event-input-layout'
                                            value={selectedList}
                                            onChange={(e) => setSelectedList(e.target.value)}
                                            required
                                        >
                                            <option value="">Chọn danh sách</option>
                                            {eventList.map((Event) => (
                                                <option key={Event.id} value={Event.id}>
                                                    {Event.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>Thông tin</th>
                                <th>Thao tác</th>
                                <th>Mới nhất</th>
                                <th>Nổi bật</th>
                            </tr>

                            <tr>
                                <td>
                                    <div className='Event-items'>
                                        <img src={EventImage} alt='Hình' className='Event-image' />
                                        <div className='Event-info-container'>
                                            <div className='info-title-Event'>
                                                <span id='Event-title'>Bất ngờ tại giải đấu chung kết của cuộc thi văn học của tỉnh bình dương 2024</span>
                                            </div>
                                            <div className='Event-Description'>
                                                <p>Trong trận chung kết của giải đấu tuyển thủ lê bình khiêm đã xuất sắc thể hiệnaa aaaaa a aa aaaaaa aa aa aaa aaa aaaa aaa aaaaa</p>
                                            </div>
                                            <div className='info-Event'>
                                                <span>Người đăng: Lê Văn Chung</span>
                                                <span>Ngày Đăng: 20/07/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='Event-button'>
                                        <button style={{ backgroundColor: "darkseagreen", color: "white" }} onClick={handleOpenRegistrationModal}>Danh sách đăng kí</button>
                                        <button style={{ backgroundColor: "red", color: "white" }}>Xóa</button>
                                        <button style={{ backgroundColor: "green", color: "white" }}>sửa</button>
                                    </div>
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <LocationModal
                show={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                locations={locations}
                onAdd={handleAddLocation}
                onEdit={handleEditLocation}
                onDelete={handleDeleteLocation}
            />
            <RegistrationModal
                show={showRegistrationModal}
                onClose={() => setShowRegistrationModal(false)}
                registrations={registrations}
            />
        </div>
    );
}

export default EventList;