import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [isDrop, setIsDrop] = useState(false);
    const [isDrop2, setIsDrop2] = useState(false);
    const [isDrop3, setIsDrop3] = useState(false);
    const [isDrop4, setIsDrop4] = useState(false);

    return (
        <div className='Admin'>
            <div class="admin-container">
                <div class="right-div">
                    <div className='admin-item-container'>
                        <div className='admin-text' onClick={() => setIsDrop(!isDrop)} >
                            <span className='item-text'>Tài khoản</span>
                        </div>
                        <div className='admin-dropdown' style={{ display: isDrop ? 'block' : 'none' }}>
                            <a href='#'>dfsdfsdfdf</a>
                            <a href='#'>ádasdasdas</a>
                            <a href='#'>sadfsafsaa</a>
                        </div>
                    </div>
                </div>
                <div class="left-div">

                </div>
            </div>
        </div>
    );
}

export default Admin;