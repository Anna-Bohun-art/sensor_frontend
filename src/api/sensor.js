import axios from "axios"

const getSensorsData = (headers) => {
    console.log('Inside the axios')
    return axios.get(`/sensor`, headers)
    //.then(response => response.data.sensors)
    
}
export default getSensorsData
