import axios from 'axios'

const initialState = {
    username: null,
    id: null
}

const CHECK_USER = 'CHECK_USER';
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const checkUser =() =>{
    let user = axios.get(`/auth/user`).then(res => res.data)
    return {
        type: CHECK_USER,
        payload: user
    }
}

export function loginUser(username, password){
    let user = axios.post(`/auth/login`, {username, password}).then(res => res.data)
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function registerUser(username, password){
    let user = axios.post(`/auth/register`, {username, password}).then(res => res.data)
    return {
        type: REGISTER_USER,
        payload: user
    }
}

export function logoutUser(){
    axios.post(`/auth/logout`).then(res => console.log(res))
    return {
        type: LOGOUT_USER,
        payload: {username: null, id: null}
    }
}


export default function (state = initialState, action){
    switch(action.type){
        case CHECK_USER + '_PENDING':
            return {...state, username: 'Loadiiiiiiiiiiiiing'}
        case CHECK_USER + '_FULFILLED':
            return {...state, username: action.payload.username, id: action.payload.id}
        case REGISTER_USER + '_PENDING':
            return {...state, username: 'Loadiiiiiiiiiiiiing'}
        case REGISTER_USER + '_FULFILLED':
            return {...state, username: action.payload.username, id: action.payload.id}   
        case REGISTER_USER + '_PENDING':
            return {...state, username: 'Loadiiiiiiiiiiiiing'}
        case REGISTER_USER + '_FULFILLED':
            return {...state, username: action.payload.username, id: action.payload.id}   
        case LOGOUT_USER + '_PENDING':
            console.log('hit')
            return {...state, username: 'Loadiiiiiiiiiiiiing'}
        case LOGOUT_USER :
            console.log('hit')
            return {...state, username: action.payload.username, id: action.payload.id}   
        default: 
            return state
    }
}

