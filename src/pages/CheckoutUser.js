import React, {Component} from 'react'
import Axios from 'axios'
import { API_URL } from '../helpers/API_URL'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact'
import { Button } from '@material-ui/core'
import Navfix from '../component/Navfix'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../style/checkoutuser.css'

import PaymentIcon from '@material-ui/icons/Payment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import {logobca} from '../img'
import { connect } from 'react-redux'

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
        let {checkoutUser} = this.state
        return (
            <div>
            <Navfix />
            {/* <div className="backgroundCart">
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
            </div> */}
            
          <div className="backgroundPayment">
            <MDBRow>
                <MDBCol  sm="4">
                    <div className="kolomKiri">
                        <h5>Receipt For</h5>
                            <span>{checkoutUser.title}</span>
                                <div className="garis1"></div>
                                <div className="amount">
                                    <PaymentIcon />
                                <span style={{paddingLeft:25}}>Amount</span><br />
                                <span style={{paddingLeft:50}}>IDR {parseInt(checkoutUser.total).toLocaleString()}</span>
                                </div>
                                <div className="garis1"></div>

                                <div className="departure">
                                <DateRangeIcon />
                                <span style={{paddingLeft:25}}>Departure</span><br />
                                <span style={{paddingLeft:50}}>{checkoutUser.departure}</span>
                                </div>
                                <div className="garis1"></div>

                                <div className="quantity">
                                <PeopleIcon />
                                <span style={{paddingLeft:25}}>Quantity</span><br />
                                <span style={{paddingLeft:50}}>{checkoutUser.quantity} Person</span>
                                </div>
                                <div className="garis1"></div>

                                <div className="status">
                                <HourglassEmptyIcon />
                                <span style={{paddingLeft:25}}>Status</span><br />
                                <span style={{paddingLeft:50}}>{checkoutUser.status}</span>
                                </div>
                    </div>
                </MDBCol>

                <MDBCol sm="8">
                        <img style={{float: 'left'}} src={logobca} />

                    <div className="textPayment">
                        <p>Dear, {this.props.username}</p>
                        <p>please make payment first so we can process your trip</p>
                        <p style={{marginBottom:'-5px'}}>Account Name    : Adirsca Tri Kurniawan</p>
                        <p style={{marginBottom:'-5px'}}>Bank Name  <span style={{paddingLeft: 31}}>:</span> BCA</p>
                        <p>Account No<span style={{paddingLeft: 34}}>:</span> 23223422232</p>

                    <div className="accountBank">
                        <Link to="/">
                            <Button style={{marginRight: '5px'}} color="primary" variant="outlined" onClick={this.addCheckoutUser} to="/history">Bayar</Button>
                        </Link>
                    </div>
                    </div>


                      

                     

                </MDBCol>
            </MDBRow>
          </div>
  
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
    }
}


export default connect(mapStateToProps)(CheckoutUser)