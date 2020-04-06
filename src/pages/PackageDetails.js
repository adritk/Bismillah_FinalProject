import React, { Component } from 'react';
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
import Axios from 'axios'
import { API_URL } from '../helpers/API_URL'
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from '@material-ui/core';
import '../style/packagedetails.css'
import {Link, Redirect} from 'react-router-dom'

// icons
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleIcon from '@material-ui/icons/People';
import Swal from 'sweetalert2'

class PackageDetails extends Component {
    state = {
        tour: [],
        mostBuy: [],
        angka: 0,
        redirectLogin: false,
        redirectPurchase: false
    }

    componentDidMount() {
        let id = this.props.location.search.split('=')[1]
        // console.log(id)
        Axios.get(API_URL + `/getpackagebyid/${id}`)
            .then((res) => {
                // console.log(res.data)
                this.setState({ tour: res.data[0]})
                // console.log(this.state.tour.harga)
            })
            .catch((err) => {
                console.log(err)
            })
            

    }

    tambah = () => {
        this.setState({ angka: this.state.angka + 1 })
    }

    kurang = () => {
        if (this.state.angka < 1) {
            this.setState({
                angka: 0
            })
        } else {
            this.setState({
                angka: this.state.angka - 1
            })
        }
    }

    rendelTotal = () => {
        let qty = this.state.angka
        let price = this.state.tour
        let total = 0
        total += qty * price.harga
        return (
            total.toLocaleString()
        )
        // console.log(qty)
    }

    addToCart = () => {
        let {angka, tour} = this.state
        const token = localStorage.getItem('token') 
        if(angka === 0) {
            Swal.fire({
                popup: 'swal2-show',
                text: 'Please Fill In This Form',
                backdrop: 'swal2-backdrop-show',
                icon: 'warning'
            })
        }
        else if(token){
            let data = {
                quantity : angka,
                productId : tour.id,
                harga : tour.harga,
                total: tour.harga * angka,
                departure : this.refs.departure.value,
                status : "Unpaid"
            }
            // console.log(data)
            const token = localStorage.getItem('token')
            if(token) {
                const headers = {
                headers : {'Authorization' : `Bearer ${token}`}
                }
            Axios.post(API_URL + '/addtocart', data, headers)
            .then((res) => {
                // alert('Booking Successfull, Please Check Your Cart')        
            Swal.fire({
                icon: 'success',
                title: 'Booking Successfull, Please Check Your Cart'
             
            })
                this.setState({redirectPurchase: true})
            })

            .catch((err)=> {
                console.log(err)
            })
        } 
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Please Login First',
            showConfirmButton: false,
            timer: 2000
        })
        this.setState({redirectLogin: true})
    }

    }

    render() {
        let { tour,redirectLogin, redirectPurchase } = this.state;
        if(redirectLogin) {
            return (
                <Redirect to='/login' />
            )
        } 
        else if (redirectPurchase) {
            return (
                <Redirect to={{pathname: '/'}} />
            )
        } 

        return (
            <div>
                <div style={{ paddingBottom: 150}}>
                    <Navfix />
                </div>
                <div className='container'>
                    <div className="row">
                        <div className='col-4'>

                            <img src={API_URL + '/' + tour.imagePath} className="image" alt="notfound" />
                        </div>

                        <div className="kotakDetails"> 
                            <MDBRow>
                                <MDBCol md="12">

                                    <div className="textTitle">
                                        {tour.title}
                                    </div>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <div className="hargaStyle">
                                                <LocalOfferIcon />
                                                <span className="textHarga">Rp. {parseInt(tour.harga).toLocaleString()}</span>
                                            </div>
                                            <hr style={{ width: '70%' }}></hr>

                                            <div className="timeStyle">
                                                <AccessTimeIcon />
                                                <span className="textDuration"> {tour.duration} </span>
                                            </div>
                                            <hr style={{ width: '70%' }}></hr>

                                            <div className="locationStyle">
                                                <LocationOnIcon />
                                                <span className="textLocation"> {tour.location} </span>
                                            </div>
                                            <hr style={{ width: '70%' }}></hr>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div className="hargaStyle">
                                                <DateRangeIcon />

                                                <input type="date" id="start" name="trip-start" min="2020-01-01" max="2020-12-31" ref="departure"/>

                                            </div>
                                            <hr style={{ width: '70%' }}></hr>

                                            <div className="hargaStyle">
                                                <PeopleIcon />
                                                <span className="textjumlahTamu">Jumlah Tamu : {this.state.angka}</span>

                                                <div className="btnChange">
                                                    <button onClick={this.tambah} type="button" className="btn btn-outline-grey  btnTambah">+</button>
                                                    <button onClick={this.kurang} type="button" className="btn btn-outline-grey btn-rounded waves-effect btnTambah">-</button>

                                                </div>
                                            </div>
                                            <hr style={{ width: '70%' }}></hr>

                                            <div className="textTotal">
                                                {/* <LocalOfferIcon /> */}
                                                <strong> Rp.
                                                 {this.rendelTotal()}
                                                </strong>
                                            </div>
                                            <hr style={{ width: '70%' }}></hr>

                                            {/* <Link to="/"> */}
                                            <Button variant="contained" color='primary' onClick={() => this.addToCart()} id="btn" >
                                                Add To Cart
                                            </Button>
                                            {/* </Link> */}
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </div>

                    </div>
                </div>
                
                <div className="fontItinerary">
                    <DirectionsBusIcon fontSize='large' color="primary" style={{ fontSize: 40 }} />
                    <span>ITINERARY</span>
                </div>
                <div className="itinerary backgroundItinerary" dangerouslySetInnerHTML={{ __html: `${this.state.tour.itinerary}` }} >

                </div>


                <div id="footer" style={{marginTop: 400}}>
                            <Footer />
                        </div>
            </div>
        );
    }
}

export default PackageDetails;