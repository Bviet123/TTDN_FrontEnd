import React, { useState } from 'react';
import './Conference.css';
import ConferenceNav from '../../component-conference/Conference_Nav/ConferenceNav';
import ConferenceLeft from '../../component-conference/Conference_Left/ConferenceLeft';
import ConferenceRight from '../../component-conference/Conference_Right/ConferenceRight';
import ConferenceFoot from '../../component-conference/Conference_Foot/ConferenceFoot';
import ConfeImg from '../../image/PlayHolder.png'


function Conference() {

    return (
        <div className="confe-App">
            <ConferenceNav />
            <main className="confe-main">
                <div className="confe-container">
                    <ConferenceLeft />
                    <div className="confe-content">
                        <div className='confe-table'>
                            <img src={ConfeImg} style={{ width: '100%', height: '100px' }} />
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


                        <div className='confe-pagination'>
                            <button className='confe-PagesButton'>Pre</button>
                            <div className='confe-pagesNum'>
                                <a>1</a>
                                <a>2</a>
                                <a>3</a>
                                <a>4</a>
                                <a>5</a>
                                <a>6</a>
                                <a>7</a>
                                <a>8</a>
                                <a>9</a>
                                <a>10</a>
                            </div>
                            <button className='confe-PagesButton'>Next</button>
                        </div>
                    </div>
                    <ConferenceRight />
                </div>
            </main>
            <ConferenceFoot />
        </div>
    );
}

export default Conference;
