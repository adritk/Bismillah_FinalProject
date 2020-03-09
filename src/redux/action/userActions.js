import Axios from 'axios'
import {API_URL} from '../../helpers/API_URL'

export const onLogin = (username, password) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/login',{
            username,
            password
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
            alert('username or password invalid')
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

export const userRegister = (data) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/register', data)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
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