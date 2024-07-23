import React, { useState } from 'react';
import './Seminar.css';
import SeminarFoot from '../../component-seminar/seminar_Foot/SeminarFoot';
import SeminarNav from '../../component-seminar/seminar_Nav/SeminarNav';
import SeminarLeft from '../../component-seminar/seminar_Left/SeminarLeft';
import SeminarRight from '../../component-seminar/seminar_Right/SeminarRight';
import SemiImg from '../../image/PlayHolder.png'


function Seminar() {

    return (
        <div className="semi-App">
            <SeminarNav />
            <main className="semi-main">
                <div className="semi-container">
                    <SeminarLeft />
                    <div className="semi-content">
                        <div className='semi-table'>
                            <img src={SemiImg} style={{ width: '100%', height: '100px' }} />
                            <div class="semi-row">
                                <div class="semi-cell" >
                                    <a href='#'><p id="semi-title"><b>Hộp nghị thảo luận về phương án lao động năm 2024</b></p></a>
                                </div>
                                <div class="semi-cell" id="semi-regis"> <p>Đăng kí</p></div>
                            </div>
                            <div class="semi-row">
                                <div class="semi-descrip">
                                    <span id='semi-description'>Trong những năm vừa qua tỉ lệ rác thải của tỉnh đã giảm đi đáng kể nhưng vẫn còn....</span>
                                </div>
                            </div>
                            <div class="semi-row">
                                <div class="semi-cell" id="semi-upuser">
                                    <p id="semi-upuser">Người đăng : Lê Văn Chung</p>
                                </div>
                                <div class="semi-cell" id="semi-update"><p>Ngày đăng : 20/01/2004</p></div>
                            </div>
                        </div>

                        
                        <div className='semi-pagination'>
                            <button className='semi-PagesButton'>Pre</button>
                            <div className='semi-pagesNum'>
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
                            <button className='semi-PagesButton'>Next</button>
                        </div>
                    </div>
                    <SeminarRight />
                </div>
            </main>
            <SeminarFoot />
        </div>
    );
}

export default Seminar;
