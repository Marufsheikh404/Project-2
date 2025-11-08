import axios from "axios";

 const axiosPublic = axios.create({
    baseURL:"https://percel-delivery.vercel.app" 
 });

 export default axiosPublic;