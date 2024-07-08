import './NewsDetails.css';
import Nav from '../../component-news/NavigationBar/Nav';
import Left from '../../component-news/LeftContainer/Left';
import Right from '../../component-news/RightContainer/Right';
import Foot from '../../component-news/FootContainer/Foot';
import itemPic from '../../image/PlayHolder.png';


function NewsDetail() {

    return (
        <div className="App">
            <Nav/>
            <main className="App-main">
                <div className="Detail-container">
                    <Left/>
                    <div className="content">
                        <div className='content-right'>
                            <p>5:00 Ngày 26/06/2024</p>
                        </div>
                        <div className='content-left'>
                            <p>Du lịch</p>
                        </div>
                        <div className='content-title'>
                            <p className='NewsDetails_Text'>Du khách Hàn Quốc chạy xe máy thăm Hội An bị lạc đường đến miền núi</p>
                        </div>
                        <div className='content-detail'>
                            <p className='NewsDetails_Text'>Một nam du khách Hàn Quốc trong lúc chạy xe máy tham quan ở Hội An nhưng lại đi lạc đường đến tận huyện miền núi Bắc Trà My, sau đó được lực lượng công an giúp tìm được người thân, hỗ trợ ăn uống, nghỉ ngơi.</p>
                            <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                            <p className='NewsDetails_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                            
                        </div>
                      
                    </div>
                    <Right/>
                </div>
            </main>
            <Foot/>
        </div>
    );
}

export default NewsDetail;
