import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/banner1.png'
import img2 from '../../../assets/banner/banner2.png'
import img3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
            <div>
                <img src={img2} />
                <p className="legend"></p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend"></p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend"></p>
            </div>
        </Carousel>
    );
};

export default Banner;