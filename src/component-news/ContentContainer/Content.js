import './Content.css';
import itemPic from './PlayHolder.png';


function Content() {

    return (
        <div className="content">
            <div className='image_slider'>
                <img className='HolderSlide' src={itemPic} alt="The holder pictrue" />
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
        </div>
    );
}

export default Content;
