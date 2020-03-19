import React, {Component} from 'react'
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'
import {connect} from 'react-redux'

// IMPORT BOOTSTRAP
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'

// IMPORT NAVBAR
import Navfix from '../component/Navfix'

class HistoryUser extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getAllTransactionUser()
    }


    getAllTransactionUser = () => {
        let id = this.props.location.state.id
        console.log(id)
        Axios.get(API_URL + `/historycartuser/${id}`)
        .then((res) => {
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    renderTransactionUser = () => {
        let {data} =this.state
        return data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tglTransaksi.split('T')[0]}</td>
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
        console.log(this.state.data)
        return (
            <div>
                <Navfix />
                <div className="backgroundCart">
                    <MDBTable bordered>
                        <MDBTableHead>
                            <tr>
                                <td>No</td>
                                <td>Tanggal Transaksi</td>
                                <td>Paket Tour</td>
                                <td>Quantity</td>
                                <td>Total Price</td>
                                <td>Departure</td>
                                <td>Status</td>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderTransactionUser()}
                        </MDBTableBody>
                    </MDBTable>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id
    }
}

export default connect(mapStateToProps)(HistoryUser)