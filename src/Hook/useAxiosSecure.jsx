import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {users, SignOut}= useAuth();
    AxiosSecure.interceptors.request.use(config=>{
        config.headers.Authorization = `Bearer ${users.accessToken}`
        return config;
    }, error=>{
        Promise.reject(error)
    })

    AxiosSecure.interceptors.response.use(res=>{
        return res;
    }, error =>{
        const status = error.status;
        if(status === 403){
            navigate('/forbidden')
        }
        else if(status === 401){
             SignOut()
             .then(()=>{
                navigate('/login')
             })
             .catch((error=>{
                console.log(error)
             }))
        }
        return Promise.reject(error)
    })
    return AxiosSecure;
}
export default useAxiosSecure;