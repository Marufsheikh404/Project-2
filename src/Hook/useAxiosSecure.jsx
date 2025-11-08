import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: `https://percel-delivery.vercel.app`
});

const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;
