import './Left.css';

function Left() {

    return (
        <div className='Column_Container'>
            <div className='search_container'>
                <div className='Search_form'>
                    <form action="/search">
                        <input className='input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                        <div className='btn_container'>
                            <button id='btn_search' type="submit">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='Type_Text'>
                <b><span className='Type'>Thể loại</span></b>
            </div>
            <div className="aside-left">
                <div className='News_Select'>
                    <a href='#' className='News_A'><span className='News_Types'>Tất cả</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Thể thao</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Văn hóa</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Giáo dục</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Khoa học</span></a>
                </div>
            </div>
        </div>
    );
}

export default Left;
