import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import Swal from 'sweetalert2';

const PaymentFrom = ({ percelId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const { users } = useAuth();

    const { isPending, data: percelIfo = {}, refetch } = useQuery({
        queryKey: ['percels', percelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/percels/${percelId}`);
            return res.data;
        }
    });

    if (isPending) return 'Loading...';

    const amount = percelIfo.totalCost;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            return;
        }
        setError('');

        // create payment intent
        const res = await axiosSecure.post('/create-payment-intent', { price: amount });
        const clientSecret = res.data.clientSecret;

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: users?.email
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {

            //Save Payment History
            const paymentData = {
                userEmail: users.email,
                parcelId: percelId,
                amount,
                transactionId: paymentIntent.id,
                date: new Date(),
            };

            await axiosSecure.post('/payment-success', paymentData);

            await axiosSecure.patch(`/percels/${percelId}/pay`, { status: "paid" });


            refetch();

            Swal.fire({
                title: "Payment Successful",
                text: `Transaction ID: ${paymentIntent.id}`,
                icon: "success"
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
                className='space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-10'
            >
                <label className="font-semibold text-sm">Card Details</label>
                <CardElement className='p-2 border rounded' />

                <button
                    className='btn bg-[#ddf95f] w-full'
                    type='submit'
                    disabled={!stripe || percelIfo.status === "paid"}
                >
                    {percelIfo.status === "paid" ? "Already Paid" : `Pay $ ${amount}`}
                </button>

                {error && <p className='text-sm font-semibold text-red-500'>{error}</p>}
            </form>
        </div>
    );
};

export default PaymentFrom;
