import './Right.css';
import Pic from '../../image/PlayHolder.png';


function Right() {

    return (
        <div className='Column_Container_right'>
            <div>
                <b><span className='Type'>Các tin mới nhất</span></b>
            </div>
            <div className="aside-right">
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
            </div>
            <div>
                <b><span className='Type'>Các tin nổi bật </span></b>
            </div>
            <div className="aside-right">
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
                <div className='aside-around'>
                    <img className='right-pic' src={Pic} alt="The holder pictrue" />
                    <b><a href='NewsDetails' className='text_link'><p className='Type'>Cuộc thi công nghệ trẻ....</p></a></b>
                </div>
            </div>

        </div>
    );
}

export default Right;
