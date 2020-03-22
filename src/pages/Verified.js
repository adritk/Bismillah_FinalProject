import React, { Component } from 'react'
import { API_URL }  from '../helpers/API_URL'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import queryString from 'query-string'

class Verified extends Component {
    state = {
        Redirect : false
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search)
        let username = params.username
        let password = params.password

        Axios.post(API_URL + `/users/emailverification`, {
            username,
            password
        })
        .then((res) => {
            this.setState({Redirect : true})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() { 
        if(this.state.Redirect) {
            return (
                <Redirect to="/login">

                </Redirect>
            )
        }
        return ( 
            <div>
                <h1>Check Your Email To Verified</h1>
            </div>
         );
    }
}
 
export default Verified;