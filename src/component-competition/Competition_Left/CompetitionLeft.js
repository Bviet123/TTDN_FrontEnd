import './CompetitionLeft.css';

function CompetitionLeft() {   

    return (
        <div className='compe-Column_Container'>
            <div className='compe-search_container'>
                <div className='compe-Search_form'>
                    <form action="/search">
                        <input className='compe-input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                        <div className='compe-btn_container'>
                            <button className='compe-btn_search' type="submit">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='compe-Type_Text'>
                <b><span className='compe-Type'>Hội thi</span></b>
            </div>
            <div className="compe-aside-left">
                <div className='compe-News_Select'>
                    <a href='#' className='compe-News_A'><span className='compe-News_Types'>Tất cả</span></a>
                    <a href='#' className='compe-News_A'><span className='compe-News_Types'>Văn hóa</span></a>
                    <a href='#' className='compe-News_A'><span className='compe-News_Types'>Giáo dục</span></a>
                    <a href='#' className='compe-News_A'><span className='compe-News_Types'>Thể thao</span></a>
                    <a href='#' className='compe-News_A'><span className='compe-News_Types'>Khoa học</span></a>
                </div>
            </div>
        </div>
    );
}

export default CompetitionLeft;
