import './Content.css';
import itemPic from './PlayHolder.png';
import PauseOnHover from './silder';


function Content() {

    return (
        <div className="content">
            <div className='slider-slide'>
                <div className='slider-div'>
                    <PauseOnHover />
                </div>
            </div>
            <div className="News_container">
                <div className="News_Item">
                    <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                    <div className='text_div'>
                        <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                    </div>
                </div>
                <div className="News_Item">
                    <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                    <div className='text_div'>
                        <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                    </div>
                </div>
                <div className="News_Item">
                    <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                    <div className='text_div'>
                        <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                    </div>
                </div>
                <div className="News_Item">
                    <img className='Pic_item' src={itemPic} Alt="The holder Pictrure" />
                    <div className='text_div'>
                        <a href='NewsDetails' className='text_link'><b className='text_item'>Cuộc thi công nghệ trẻ lần đầu tiên được tổ chức tại tỉnh bình dương</b></a>
                    </div>
                </div>
            </div>
            <div className='pagination'>
                <button className='PagesButton'>Pre</button>
                <div className='pagesNum'>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>5</a>
                    <a>6</a>
                </div>
                <button className='PagesButton'>Next</button>
            </div>
        </div>
    );
}

export default Content;
