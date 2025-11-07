import axios from 'axios';
import useAuth from './useAuth';

const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {users}= useAuth();
    AxiosSecure.interceptors.request.use(config=>{
        config.headers.Authorization = `Bearer ${users.accessToken}`
        return config;
    }, error=>{
        Promise.reject(error)
    })
    return AxiosSecure;
}
export default useAxiosSecure;