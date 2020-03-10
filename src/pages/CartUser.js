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
        Axios.get(API_URL + `/getallcart/${id}`)
            .then((res) => {
                console.log(res.data)
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


    renderCart = () => {
        let { data } = this.state
        return data.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity} Person</td>
                    <td>{parseInt(item.total).toLocaleString()}</td>

                    <td>{item.date}</td>
                    <td>
                        <Button color="secondary" onClick={() => this.onBtnCancel(item.id)}>Cancel</Button>
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
                                <td>Transaction Date</td>
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