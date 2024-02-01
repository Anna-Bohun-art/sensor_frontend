import axios from "@/api/axios"

const headers = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"
      },
}  
const register = credentials => {
    console.log(credentials);
    return axios.post("user/signup", credentials, headers) 
}
const login = credentials => {
    return axios.post("user/login", credentials, headers )
}
const getCurrentUser =(credentials) => {
    return axios.post("/user/login", credentials, headers)
}


export  { register, login, getCurrentUser }
