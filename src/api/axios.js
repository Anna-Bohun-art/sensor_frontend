import axios from "axios";
import { getItem } from "@/helpers/persistanceStorage"
axios.interceptors.request.use((config)=> {
    const token = getItem("accessToken")
    const authorizationToken =  token? `Token ${token}` : ""
    config.headers.Authorization = authorizationToken
    //console.log("config", config)
    return config
})
//axios.defaults.headers.post["Content-Type"]="application/json";
axios.defaults.baseURL= "https://sensor-backend.onrender.com/";



export default axios