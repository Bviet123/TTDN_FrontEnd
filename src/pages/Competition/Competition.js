import React, { useState } from 'react';
import './Competition.css';
import CompetitionNavNav from '../../component-competition/Competition_Nav/CompetitionNav';
import Competition_Right from '../../component-competition/Competition_Right/CompetitionRight';
import CompetitionLeft from '../../component-competition/Competition_Left/CompetitionLeft';
import CompetitionFooter from '../../component-competition/Competition_Foot/CompetitionFooter';
import CompeImg from '../../image/PlayHolder.png'


function Competition() {

    return (
        <div className="competition-App">
            <CompetitionNavNav />
            <main className="competition-main">
                <div className="competition-container">
                    <CompetitionLeft />
                    <div className="competition-content">
                        <div className='competition-table'>
                            <img src={CompeImg} style={{width: '100%', height: '100px'}}/>
                            <div>
                                <div class="competition-row">
                                    <div class="competition-cell" >
                                        <a href='#'><p id="competition-title"><b>Hộp nghị thảo luận về phương án lao động năm 2024</b></p></a>
                                    </div>
                                    <div class="competition-cell" id="competition-regis"> <p>Đăng kí</p></div>
                                </div>
                                <div class="competition-row">
                                    <div class="competition-descrip">
                                        <span id='competition-description'>Trong những năm vừa qua tỉ lệ rác thải của tỉnh đã giảm đi đáng kể nhưng vẫn còn....</span>
                                    </div>
                                </div>
                                <div class="competition-row">
                                    <div class="competition-cell" id="competition-upuser">
                                        <p id="competition-upuser">Người đăng : Lê Văn Chung</p>
                                    </div>
                                    <div class="competition-cell" id="competition-update"><p>Ngày đăng : 20/01/2004</p></div>
                                </div>
                            </div>
                        </div>

                        
                        <div className='Compe-pagination'>
                            <button className='Compe-PagesButton'>Pre</button>
                            <div className='Compe-pagesNum'>
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
                            <button className='Compe-PagesButton'>Next</button>
                        </div>
                    </div>
                    <Competition_Right />
                </div>
            </main>
            <CompetitionFooter />
        </div>
    );
}

export default Competition;
