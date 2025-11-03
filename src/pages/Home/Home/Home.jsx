
import Banner from '../Banner/Banner';
import Booking from '../Booking';
import Services from '../Services';
import Collaspe from '../Collaspe';
import Brand from '../Brand';
import Features from '../Features';
import InfoCard from '../InfoCard';
import Review from '../Review';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Booking></Booking>
           <Brand></Brand>
           <Services></Services>
           <Collaspe></Collaspe>
           <Features></Features>
           <InfoCard></InfoCard>
           <Review></Review>
        </div>
    );
};

export default Home;