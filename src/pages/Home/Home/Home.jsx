
import Banner from '../Banner/Banner';
import Booking from '../Booking';
import Services from '../Services';
import Collaspe from '../Collaspe';
import Brand from '../Brand';
import Features from '../Features';
import InfoCard from '../InfoCard';

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
        </div>
    );
};

export default Home;