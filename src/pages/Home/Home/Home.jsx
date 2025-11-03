
import Banner from '../Banner/Banner';
import Booking from '../Booking';
import Services from '../Services';
import Collaspe from '../Collaspe';
import Brand from '../Brand';
import Features from '../Features';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Booking></Booking>
           <Brand></Brand>
           <Services></Services>
           <Collaspe></Collaspe>
           <Features></Features>
        </div>
    );
};

export default Home;