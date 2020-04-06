import Axios from 'axios'
import {API_URL} from '../../helpers/API_URL'
import Swal from 'sweetalert2'

export const onLogin = (username, password, email) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/login',{
            username,
            password,
            email
        })
        .then((res) => {
    
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            dispatch({
                type : 'LOGIN',
                payload : res.data
            })
        })
        .catch((err) => {
            localStorage.removeItem('token')
            Swal.fire({
                popup: 'swal2-show',
                text: 'Username Or Password Invalid',
                backdrop: 'swal2-backdrop-show',
                icon: 'error'
            })
            // console.log(err.response.data)
            // alert(err.response.data)
            dispatch({
                type : 'LOGOUT'
            })
        })
    }
}

export const Logout = () => {
    return{
        type: 'LOGOUT'
    }
}

export const KeepLogin = () => {
    return(dispatch) => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            const headers = {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }
            Axios.post(API_URL + '/users/keeplogin', {}, headers)
            .then((res) => {
                // console.log(res.data.verified)
                dispatch({
                    type : 'LOGIN',
                    payload : res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type : 'LOGOUT'
                })
            })
        }
    }
}

export const userRegister = (data) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/register', data)
        .then((res) => {
            console.log(res.data[0].token)
            localStorage.setItem('token', res.data[0].token)
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        })
        .catch((err) => {
            localStorage.removeItem('token')
            dispatch({
                type: 'LOGOUT'
            })
        })
    }
}