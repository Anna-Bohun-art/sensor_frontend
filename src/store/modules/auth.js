import {register,  login, getCurrentUser} from "@/api/auth"
import { setItem } from "@/helpers/persistanceStorage"
//import { registerURL, loginURL } from "@/api/auth"
const state = {
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: null,
    validationErrors: null,
    isLoading: false,
    
    
    
}

export const mutationTypes = {
    registerStart: "[auth] Register start",
    registerSuccess: "[auth] Register success",
    registerFailure: "[auth] Register failure",

    loginStart: "[auth] Login start",
    loginSuccess: "[auth] Login success",
    loginFailure: "[auth] Login failure",

    getCurrentUserStart: "[auth] Get current user start",
    getCurrentUserSuccess: "[auth] Get current user success",
    getCurrentUserFailure: "[auth] Get current user failure"
}
export const actionTypes = {
    register: "[auth] Register",
    login: "[auth] Login",
    getCurrentUser: "[auth] Get current user"
}
export const getterTypes = {
    currentUser: "[auth] currentUser",
    isLoggedIn: "[auth] isLoggedIn",
    isAnonymous: "[auth] isAnonymous",
}
const getters = {
    [getterTypes.currentUser]: state => {
        return state.currentUser
    },
    [getterTypes.isLoggedIn]: state => {
        //console.log('Statue-Login: ', state.isLoggedIn)
        return Boolean(state.isLoggedIn)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
} 
const mutations = {
    [mutationTypes.registerStart](state){
        state.isSubmitting = true
        state.validationErrors = null
    
    },
    [mutationTypes.registerSuccess](state, payload){
        state.isSubmitting = false
        state.isLoggedIn = true
        state.currentUser = payload
    },
    [mutationTypes.registerFailure](state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    },

    [mutationTypes.loginStart](state){
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.loginSuccess](state, currentUser){
        //console.log('currentUser-isLoggedIn: ', currentUser)
        state.isSubmitting = false
        state.isLoggedIn = true
        state.currentUser = currentUser
        
    },
    [mutationTypes.loginFailure](state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    },

    [mutationTypes.getCurrentUserStart](state){
        state.isLoading = true
    },
    [mutationTypes.getCurrentUserSuccess](state, payload){
        state.isLoading = false
        state.isLoggedIn = true
        state.currentUser = payload
    },
    [mutationTypes.getCurrentUserFailure](state){
        state.isLoading = false
        state.isLoggedIn = false
        state.currentUser = null
    }
}
const actions = {
    [actionTypes.register](context, credentials){
        return new Promise(resolve => {
            context.commit(mutationTypes.registerStart)
            register(credentials)
                .then(response => {
                    console.log("response", response)
                    context.commit(mutationTypes.registerSuccess, response.data)
                    console.log("response.data", response.data)
                    setItem("accessToken",response.data.token)
                    console.log("response.data.token", response.data.token)
                    console.log("state.currentUser", state.currentUser)
                    resolve(response.data.currentUser)
                })
                .catch(result => {
                    const feedback = result.data.errors;
                    context.commit(mutationTypes.registerFailure, feedback)
                })
        })
    },
    [actionTypes.login](context, credentials){
        return new Promise(resolve => {
            context.commit(mutationTypes.loginStart)
            login(credentials)
                .then(response => {
                    context.commit(mutationTypes.loginSuccess, response.data)
                    setItem("accessToken",response.data.token)
                    console.log("response.data.token: ", response.data.token)
                    resolve(response.data.currentUser)
                    console.log("state.currentUser", state.currentUser)
                    
                })
                .catch((result) => {
                    context.commit(mutationTypes.loginFailure, result.response.data.errors);
                })
        })
    },
    [actionTypes.getCurrentUser](context, credentials){
        return new Promise(resolve => {
            context.commit(mutationTypes.getCurrentUserStart)
            debugger
            getCurrentUser(credentials)
                .then(response => {
                    //console.log("current user response", response)
                    context.commit(mutationTypes.getCurrentUserSuccess, response.currentUser)
                    setItem("accessToken",response.token)
                    resolve(response.data.currentUser)
                })
                .catch((error) => {
                    context.commit(mutationTypes.getCurrentUserFailure, error);
                    //console.log("error", error.message);
                })
        })
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}