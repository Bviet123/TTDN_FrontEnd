import React, { useState } from 'react';
import './Conference.css';
import ConferenceNav from '../../component-conference/Conference_Nav/ConferenceNav';
import ConferenceLeft from '../../component-conference/Conference_Left/ConferenceLeft';
import ConferenceRight from '../../component-conference/Conference_Right/ConferenceRight';
import ConferenceFoot from '../../component-conference/Conference_Foot/ConferenceFoot';


function Conference() {

    return (
        <div className="confe-App">
            <ConferenceNav/>
            <main className="confe-main">
                <div className="confe-container">
                    <ConferenceLeft/>
                    <div className="confe-content">
                        <div className='confe-table'>
                            <div class="confe-row">
                                <div class="confe-cell" >
                                    <a href='#'><p id="confe-title"><b>Hộp nghị thảo luận về phương án lao động năm 2024</b></p></a>
                                </div>
                                <div class="confe-cell" id="confe-regis"> <p>Đăng kí</p></div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-descrip">
                                    <span id='confe-description'>Trong những năm vừa qua tỉ lệ rác thải của tỉnh đã giảm đi đáng kể nhưng vẫn còn....</span>
                                </div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-cell" id="confe-upuser">
                                    <p id="confe-upuser">Người đăng : Lê Văn Chung</p>
                                </div>
                                <div class="confe-cell" id="confe-update"><p>Ngày đăng : 20/01/2004</p></div>
                            </div>
                        </div>

                        <div className='confe-table'>
                            <div class="confe-row">
                                <div class="confe-cell" >
                                    <a href='#'><p id="confe-title"><b>Hộp nghị thảo luận về phương án lao động năm 2024</b></p></a>
                                </div>
                                <div class="confe-cell" id="confe-regis"> <p>Đăng kí</p></div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-descrip">
                                    <span id='confe-description'>Trong những năm vừa qua tỉ lệ rác thải của tỉnh đã giảm đi đáng kể nhưng vẫn còn....</span>
                                </div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-cell" id="confe-upuser">
                                    <p id="confe-upuser">Người đăng : Lê Văn Chung</p>
                                </div>
                                <div class="confe-cell" id="confe-update"><p>Ngày đăng : 20/01/2004</p></div>
                            </div>
                        </div>

                        <div className='confe-table'>
                            <div class="confe-row">
                                <div class="confe-cell" >
                                    <a href='#'><p id="confe-title"><b>Hộp nghị thảo luận về phương án lao động năm 2024</b></p></a>
                                </div>
                                <div class="confe-cell" id="confe-regis"> <p>Đăng kí</p></div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-descrip">
                                    <span id='confe-description'>Trong những năm vừa qua tỉ lệ rác thải của tỉnh đã giảm đi đáng kể nhưng vẫn còn....</span>
                                </div>
                            </div>
                            <div class="confe-row">
                                <div class="confe-cell" id="confe-upuser">
                                    <p id="confe-upuser">Người đăng : Lê Văn Chung</p>
                                </div>
                                <div class="confe-cell" id="confe-update"><p>Ngày đăng : 20/01/2004</p></div>
                            </div>
                        </div>                     
                    </div>
                    <ConferenceRight/>
                </div>
            </main>
            <ConferenceFoot/>
        </div>
    );
}

export default Conference;
