import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const PaymentFrom = ({ percelId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();

    const {isPending, data:percelIfo ={}} = useQuery({
        queryKey:['percels',percelId],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/percels/${percelId}`)
            return res.data;
        }
    })
    if(isPending){
        return '....Loading'
    }
    const amount = (percelIfo.totalCost)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }

        // create card for payment
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error)
        } else {
            setError('')
            console.log('payment method', paymentMethod)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-10'>
                <CardElement className='p-2 border rounded'>
                </CardElement>
                <button className='btn btn-primary w-full' type='submit' disabled={!stripe}>Pay ${amount}</button>

                {
                    error && <p className='text-sm font-semibold text-red-500'>{error.message}</p>
                }
            </form>
        </div>
    );
};

export default PaymentFrom;