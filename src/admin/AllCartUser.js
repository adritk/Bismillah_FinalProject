import React, { Component } from 'react';
import SideBarAdmin from './SideBarAdmin';
import Axios from 'axios'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import { API_URL } from '../helpers/API_URL';

class AllCartUser extends Component {
    state = {
        cartusers : []
    }

   async componentDidMount() {
        const cartusers = await Axios.get(API_URL + '/getallcart')
        this.setState({cartusers : cartusers.data})
    }

    renderAllCartUsers = () => {
        let {cartusers} = this.state
        return cartusers.map((item, index) => {
            return (
                <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.title}</td>
                <td>{item.quantity} Person</td>
                <td>Rp. {parseInt(item.total).toLocaleString()}</td>
                <td>{item.departure.split('T')[0]}</td>
                <td>{item.status}</td>
            </tr>
            )
        })
    }

    render() {
        return (
            <div>
            <SideBarAdmin />
                <div className="backgroundCart">
                <MDBTable bordered>
                        <MDBTableHead>
                            <tr>
                                <td>No</td>
                                <td>User</td>
                                <td>Paket Tour</td>
                                <td>Quantity</td>
                                <td>Total Price</td>
                                <td>Departure</td>
                                <td>Status</td>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderAllCartUsers()}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        );
    }
}

export default AllCartUser;