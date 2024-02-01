import getSensorsData from "@/api/sensor"

//import { setItem } from "@/helpers/persistanceStorage"
//import { registerURL, loginURL } from "@/api/auth"
export const state = {
    sensorData: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getSensorDataStart: "[sensorData] Get SensorData start",
    getSensorDataSuccess: "[sensorData] Get SensorData success",
    getSensorDataFailure: "[sensorData] Get SensorData failure"
}
export const actionTypes = {
    getSensorData: "[sensorData] Get SensorData",
    
}

const mutations = {
    [mutationTypes.getSensorDataStart](state){
        state.isLoading = true
        state.sensorData = null
    },
    [mutationTypes.getSensorDataSuccess](state, payload){
        state.isLoading = false
        state.sensorData = payload
        console.log("state.sensorData from mutationTypes", state.sensorData)
    },
    [mutationTypes.getSensorDataFailure](state, payload){
        state.isLoading = false
        state.error = payload
        
    },
}
const actions = {
    [actionTypes.getSensorData](context){
        return new Promise(resolve => {
            context.commit(mutationTypes.getSensorDataStart)
            console.log("before fetching");
            getSensorsData()
                .then(sensorData => {
                    context.commit(mutationTypes.getSensorDataSuccess, sensorData.data.sensors)
                    resolve(sensorData.data.sensors)
                    console.log("sensorData from Promise", sensorData)
                })
                .catch((error) => {
                    context.commit(mutationTypes.getSensorDataFailure)
                    console.log("Error", error.message)
                })
        })
    }
}
export const getterTypes = {
    sensorData: "[sensorData] sensorData",
    isLoading: "[sensorData] isLoading",
    error: "[sensorData] error",
}
const getters = {
    [getterTypes.sensorData]: state => {
        console.log("state.sensorData", state.sensorData);
        return state.sensorData
    },
    [getterTypes.isLoading]: state => {
        //console.log('Statue-Login: ', state.isLoggedIn)
        return Boolean(state.isLoading)
    },
    [getterTypes.error]: state => {
        return state.error
    }
} 
export default {
    actions,
    mutations,
    getters
}