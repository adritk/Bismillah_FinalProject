// IMPORT IMPORTANT
import React, { Component } from 'react'
import { API_URL } from '../helpers/API_URL'
import Axios from 'axios'
import '../style/cartuser.css'

// IMPORT BOOTSTRAP
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
import { Button } from '@material-ui/core'

// IMPORT NAVBAR
import Navfix from '../component/Navfix'


class CartUser extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        this.getAllCart()
    }

    getAllCart = () => {
        let id = this.props.location.state.id
        Axios.get(API_URL + `/getallcartbyid/${id}`)
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    
    onBtnCancel = (id) => {
        Axios.delete(API_URL + `/deletecart/${id}`)
            .then((res) => {
                this.getAllCart()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onBtnCheckout = () => {
        let {data} = this.state
        console.log(data)
        const token = localStorage.getItem('token')
        if(token) {
            const headers = {
                headers : {'Authorization' : `Bearer ${token}`}
            }
            Axios.post(API_URL + '/history', data, headers)
            .then((res) => {
                alert('Checkout Success')
            })
        }
    }


    renderCart = () => {
        let { data } = this.state
        return data.map((item, index) => {
            // console.log(data[0].status)
            return (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity} Person</td>
                    <td>Rp. {parseInt(item.total).toLocaleString()}</td>
                    <td>{item.departure.split('T')[0]}</td>
                    <td>{item.status}</td>
                    <td>
                        <Button style={{marginRight: '5px'}} color="primary" variant="outlined" onClick={() => this.onBtnCheckout(item.id)}>Book</Button>
                        <Button color="secondary" variant="outlined" onClick={() => this.onBtnCancel(item.id)}>Cancel</Button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <Navfix />
                <div className="backgroundCart">
                    <MDBTable bordered>
                        <MDBTableHead>
                            <tr>
                                <td>No</td>
                                <td>Paket Tour</td>
                                <td>Quantity</td>
                                <td>Total Price</td>
                                <td>Departure</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderCart()}
                        </MDBTableBody>
                    </MDBTable>

                </div>
            </div>
        )
    }
}

export default CartUser