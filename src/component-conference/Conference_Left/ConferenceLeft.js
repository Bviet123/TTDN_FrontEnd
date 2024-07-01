import './ConferenceLeft.css';

function ConferenceLeft() {

    return (
        <div className='confe-Column_Container'>
            <div className='confe-search_container'>
                <div className='confe-Search_form'>
                    <form action="/search">
                        <input className='confe-input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                        <div className='confe-btn_container'>
                            <button className='confe-btn_search' type="submit">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='confe-Type_Text'>
                <b><span className='confe-Type'>Hội nghị</span></b>
            </div>
            <div className="confe-aside-left">
                <div className='confe-News_Select'>
                    <a href='#' className='confe-News_A'><span className='confe-News_Types'>Tất cả</span></a>
                    <a href='#' className='confe-News_A'><span className='confe-News_Types'>Quốc tế</span></a>
                    <a href='#' className='confe-News_A'><span className='confe-News_Types'>Thương mại</span></a>
                    <a href='#' className='confe-News_A'><span className='confe-News_Types'>Chuyên đề</span></a>
                    <a href='#' className='confe-News_A'><span className='confe-News_Types'>Khoa học</span></a>
                </div>
            </div>
        </div>
    );
}

export default ConferenceLeft;
