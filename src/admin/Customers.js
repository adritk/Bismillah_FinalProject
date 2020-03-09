import React, { Component } from 'react';
import Axios from 'axios'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import { API_URL } from '../helpers/API_URL';

class Customer extends Component {
    state = {
        users : []
    }
    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        Axios.get(API_URL + '/users/getall')
        .then((res) => {
            // console.log(res.data)
            this.setState({users : res.data})
        })
    }

    renderUsers = () => {
        let {users} = this.state
        console.log(users)
        return users.map((item, index) => {
            return (
                <tr>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            )
        })
    }
    render() {
        return (
            <MDBContainer>
            <MDBTable striped>
                <MDBTableHead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {this.renderUsers()}
                </MDBTableBody>
            </MDBTable>
            </MDBContainer>
        );
    }
}

export default Customer;