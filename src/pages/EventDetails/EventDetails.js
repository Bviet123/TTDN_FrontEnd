import Nav from '../../component-news/NavigationBar/Nav';
import Left from '../../component-news/LeftContainer/Left';
import Right from '../../component-news/RightContainer/Right';
import Foot from '../../component-news/FootContainer/Foot';
import './Eventdetails.css';


function EventDetail() {

    return (
        <div className="Event-App">
            <Nav/>
            <main className="Event-main">
                <div className="EventDetail-container">
                    <Left/>
                    <div className="Event">
                        <div className='Event-right'>
                            <p>Ngày đăng: 20/07/2024</p>
                        </div>
                        <div className='Event-left'>
                            <p>Công nghệ</p>
                        </div>
                        <div className='Event-title'>
                            <p className='Event_Text'>Hội thảo về khả năng vận dụng trí tuệ nhân tạo trong đời sống</p>
                        </div>
                        <div className='Event-detail'>
                    
                            <p className='Event_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, 
                            lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                            <p className='Event_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, 
                            lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                            <p className='Event_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, 
                            lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                            <p className='Event_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, 
                            lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                        </div>
                        <div className='Event-title'>
                            <p className='Event_Text'>Hội thảo về khả năng vận dụng trí tuệ nhân tạo trong đời sống</p>
                        </div>
                        <div className='Event-detail'>
                            <p className='Event_Text'>Chiều 26-6, thông tin từ Công an tỉnh Quảng Nam cho hay lực lượng Công an xã Trà Tân, huyện Bắc Trà My vừa hỗ trợ một nam du khách người Hàn Quốc đoàn tụ cùng người thân gia đình sau thời gian bị lạc đường, lạc người thân trong lúc tham quan ở Hội An.
                            Theo đó qua công tác quản lý địa bàn, khoảng 6h30 cùng ngày, 
                            lực lượng công an xã này phát hiện một người nước ngoài có các biểu hiện lạ.</p>
                        </div>
                        <div>
                        <div className='Event-title'>
                            <p className='Event_Text'>File tài liệu</p>
                        </div>
                        </div>
                    </div>
                    <Right/>
                </div>
            </main>
            <Foot/>
        </div>
    );
}

export default EventDetail;
