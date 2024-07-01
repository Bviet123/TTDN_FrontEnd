import React, { useState } from 'react';
import './Competition.css';
import CompetitionNavNav from '../../component-competition/Competition_Nav/CompetitionNav';
import Competition_Right from '../../component-competition/Competition_Right/CompetitionRight';
import CompetitionLeft from '../../component-competition/Competition_Left/CompetitionLeft';
import CompetitionFooter from '../../component-competition/Competition_Foot/CompetitionFooter';


function Competition() {

    return (
        <div className="competition-App">
            <CompetitionNavNav/>
            <main className="competition-main">
                <div className="competition-container">
                    <CompetitionLeft/>
                    <div className="competition-content">
                        <div className='competition-table'>
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

                        <div className='competition-table'>
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

                        <div className='competition-table'>
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
                    <Competition_Right/>
                </div>
            </main>
            <CompetitionFooter/>
        </div>
    );
}

export default Competition;
