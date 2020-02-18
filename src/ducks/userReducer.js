import axios from 'axios'

const initialState = {
    user: []
}

const CHECK_USER = 'CHECK_USER';
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function checkUser(){

}

export function loginUser(){
    // axios.get(``)
}

export function registerUser(){

}

export function logoutUser(){

}


export default function reducer(state = initialState, action){
    switch(action.type){

    }
}