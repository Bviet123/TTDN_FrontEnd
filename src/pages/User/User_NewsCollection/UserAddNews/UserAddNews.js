import React, { useRef, useState } from 'react';
import './UserAddNews.css';
import Nav from '../../../component-news/NavigationBar/Nav';
import Foot from '../../../component-news/FootContainer/Foot';
import UserAside from '../../../component-user/User-Aside/UserAside';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import IconHint from '../../../image/nav-icon.png';
import PlaceImage from '../../../image/PlayHolder.png';

import {
    FaFileWord,
    FaFilePdf,
    FaFileAlt,
    FaTimesCircle,
    FaPlusCircle
} from 'react-icons/fa';


function UserEditor() {
    

    return (
        <div className='Add-wrapper'>
            <div>
                <Nav />
            </div>
            <div className='main-NewsAdd-container'>
                <div className='NewsAdd-aside' style={{ display: UserHint ? 'none' : 'block' }}>
                    <UserAside />
                </div>
                <div className='NewsAdd-container'>
                    <div className='NewsAdd-create-blog'>
                        <div className='NewsAdd-shower-container'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='userfoot'>
                <Foot />
            </div>
        </div>

    );
}
export default UserEditor;
