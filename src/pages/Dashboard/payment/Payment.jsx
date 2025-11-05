import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';
import { useParams } from 'react-router';


const Payment = () => {
    const {id} = useParams();

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentFrom percelId ={id}></PaymentFrom>
            </Elements>
        </div>
    );
};

export default Payment;