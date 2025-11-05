import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = e =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
    }
    return (
        <div>
             <form onSubmit={handleSubmit} >
                <CardElement>
                    <button type='submit' disabled={!stripe}>Pay</button>
                </CardElement>
             </form>
        </div>
    );
};

export default PaymentFrom;