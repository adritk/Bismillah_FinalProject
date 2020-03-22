import React, {Component} from 'react'
import Axios from 'axios'
import { API_URL } from '../helpers/API_URL'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
import { Button } from '@material-ui/core'
import Navfix from '../component/Navfix'
import {Link} from 'react-router-dom'

class CheckoutUser extends Component {
    state = {
        checkoutUser : []
    }

    componentDidMount() {
        this.getCheckoutById()
    }

    getCheckoutById = () => {
        let {idUser, idCart} = this.props.location.state
        Axios.get(API_URL + `/getcheckoutbyid?id=${idUser}&cartId=${idCart}`)
        .then((res) => {
            console.log(res.data)
            this.setState({checkoutUser: res.data[0]})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addCheckoutUser = () => {
        let {idUser, idProduct} = this.props.location.state
        console.log(this.props.location.state)
        Axios.post(API_URL + `/checkoutuser?productId=${idProduct}&userId=${idUser}`)
        .then((res) => {
            alert('Bayar Sukses')

        })
    }

    renderCheckout = () => {
        let {checkoutUser} = this.state
        return (
            <tr>
                <td>{checkoutUser.title}</td>
                <td>{checkoutUser.quantity}</td>
                <td>Rp. {parseInt(checkoutUser.total).toLocaleString()}</td>
                <td>{checkoutUser.departure}</td>
                <td>{checkoutUser.status}</td>
                <td>
                <Link to="/">
                <Button style={{marginRight: '5px'}} color="primary" variant="outlined" onClick={this.addCheckoutUser} to="/history">Bayar</Button>
                </Link>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div>
            <Navfix />
            <div className="backgroundCart">
                <MDBTable bordered>
                    <MDBTableHead>
                        <tr>
                            <td>Paket Tour</td>
                            <td>Quantity</td>
                            <td>Total Price</td>
                            <td>Departure</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.renderCheckout()}
                    </MDBTableBody>
                </MDBTable>

            </div>
        </div>
        )
    }
}



export default CheckoutUser