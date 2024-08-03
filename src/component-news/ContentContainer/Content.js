import './Content.css';
import itemPic from './PlayHolder.png';
import itemPic1 from '../../image/PlayHolder.png';
import itemPic2 from '../../image/meme_fish.jpg';
import itemPic3 from '../../image/Power.jpeg';
import itemPic4 from '../../image/img-shadow.png';
import itemPic5 from '../../image/PlayHolder.png';
import Slider from './silder';



function Content() {
    const slides = [
        { image: itemPic1, alt: "Slide 1" },
        { image: itemPic2, alt: "Slide 2" },
        { image: itemPic3, alt: "Slide 3" },
        { image: itemPic4, alt: "Slide 4" },
        { image: itemPic5, alt: "Slide 5" },
    ];

    return (
        <div className="content">
            <div className='slider-slide'>
                <div className='slider-div'>
                    <Slider slides={slides} />
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
