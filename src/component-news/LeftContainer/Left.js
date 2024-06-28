import './Left.css';

function Left() {

    return (
        <div className='Column_Container'>
            <div className='search_container'>
                <div className='Search_form'>
                    <form action="/search">
                        <input className='input_text' type="search" name="query" placeholder="Nhập từ khóa...." />
                        <div className='btn_container'>
                            <button className='btn_search' type="submit">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='Type_Text'>
                <b><span className='Type'>Thể loại</span></b>
            </div>
            <div className="aside-left">
                <div className='News_Select'>
                    <a href='#' className='News_A'><span className='News_Types'>Giới trẻ</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Thể thao</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Tin nóng</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Tin mới</span></a>
                    <a href='#' className='News_A'><span className='News_Types'>Tin siêu siêu nóng</span></a>
                </div>
            </div>
        </div>
    );
}

export default Left;
