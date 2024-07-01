import './SeminarLeft.css';

function SeminarLeft() {

    return (
        <div className='semi-Column_Container'>
            <div className='semi-search_container'>
                <div className='semi-Search_form'>
                    <form action="/search">
                        <input className='semi-input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                        <div className='semi-btn_container'>
                            <button className='semi-btn_search' type="submit">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='semi-Type_Text'>
                <b><span className='semi-Type'>Hội Thảo</span></b>
            </div>
            <div className="semi-aside-left">
                <div className='semi-News_Select'>
                    <a href='#' className='semi-News_A'><span className='semi-News_Types'>Tất cả</span></a>
                    <a href='#' className='semi-News_A'><span className='semi-News_Types'>Quốc tế</span></a>
                    <a href='#' className='semi-News_A'><span className='semi-News_Types'>Thương mại</span></a>
                    <a href='#' className='semi-News_A'><span className='semi-News_Types'>Chuyên đề</span></a>
                    <a href='#' className='semi-News_A'><span className='semi-News_Types'>Khoa học</span></a>
                </div>
            </div>
        </div>
    );
}

export default SeminarLeft;
