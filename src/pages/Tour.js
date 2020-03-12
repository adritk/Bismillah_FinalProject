import React, { Component } from 'react'
import '../style/tour.css'
import Axios from 'axios'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlightIcon from '@material-ui/icons/Flight';
import { MDBBtn , MDBContainer, MDBRow } from 'mdbreact';
import {API_URL} from '../helpers/API_URL'
import {Link} from 'react-router-dom'
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'

export default class Tour extends Component {
    state = {
        tour: []
    }

    componentDidMount = () => {
        Axios.get(API_URL + '/getpackagedomestik')
        .then((res) => {
            // console.log(res.data)
            this.setState({tour: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderTour = () => {  
        return(
            this.state.tour.map((val,index) => {
                    return (
                        <div className="box-tour" key={index}>
                        <img src = {API_URL + '/' + val.imagePath} className="image-2" alt="notfound"/> 
                            <div className="overlay-tour">
                        <div className="text-tour">{val.title}
                            <div>
                                Rp. {val.harga.toLocaleString()}
                                <hr style={{backgroundColor:"white" }}></hr>
                                <div>
                                <h6><AccessTimeIcon fontSize="small"/> {val.duration}</h6>
                                <h6><LocationOnIcon fontSize="small"/>&nbsp;{val.location}</h6>
                                </div>
                            </div>
                        </div>
                                <div style={{marginTop: "55px", borderRadius: "30px"}}>
                                    <Link to={`/package-details?id=${val.id}`}>
                                    <input type="button" value="More Info" className="btnInfo" to="package-details" />
                                    </Link>
                                </div>
                    </div>
                    </div>
                )       
            })
        )
    }
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)"}}>
                <Navfix />
                <div style={{paddingTop:"110px", marginBottom: "100px", minHeight: "410px"}}>
                    <MDBContainer>
                        <MDBRow >
                            {this.renderTour()}
                        </MDBRow>
                    </MDBContainer>
                </div>
                <div id="footer">
                            <Footer />
                        </div>
            </div>
        )
    }
}