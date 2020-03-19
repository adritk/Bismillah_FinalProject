import React, { Component } from 'react';
import SideBarAdmin from './SideBarAdmin';
import Axios from 'axios'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { API_URL } from '../helpers/API_URL';




class TransactionUser extends Component {
    state = {
        transaction : []
    }

    componentDidMount() {
        this.getAllTransaction()
    }


    getAllTransaction = () => {
        Axios.get(API_URL + '/gettransaction')
        .then((res) => {
            console.log(res.data)
            this.setState({transaction: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderTransaction = () => {
        let {transaction} = this.state
        return transaction.map((item, index) => {
            return (
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.tglTransaksi.split('T')[0]}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{item.status}</td>
                <td>{item.departure.split('T')[0]}</td>
              </tr>
            )
        })
    }

    render() {
        // console.log()
        return (
            <div>
            <SideBarAdmin />
                <div className="backgroundCart">
                <MDBTable bordered>
                        <MDBTableHead>
                            <tr>
                                <td>No</td>
                                <td>User</td>
                                <td>Tanggal Transaksi</td>
                                <td>Paket Tour</td>
                                <td>Quantity</td>
                                <td>Total Price</td>
                                <td>Status</td>
                                <td>Departure</td>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                                {this.renderTransaction()}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        )
    }
}

export default TransactionUser