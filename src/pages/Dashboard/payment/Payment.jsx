import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';


const Payment = () => {

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentFrom></PaymentFrom>
            </Elements>
        </div>
    );
};

export default Payment;