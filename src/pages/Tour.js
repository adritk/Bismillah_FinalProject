import React, { Component } from 'react'
import '../style/tour.css'
import Axios from 'axios'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlightIcon from '@material-ui/icons/Flight';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

export default class Tour extends Component {
    state = {
        tour: []
    }

    componentDidMount = () => {
        Axios.get('http://localhost:2000/package')
        .then((res) => {
            console.log(res.data)
            this.setState({tour: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderTour = () => {
        return(
            this.state.tour.map((val,index) => {
                if(val.category == 'Travelling') {
                    return (
                        <div className="box-tour">
                        <img src = {val.image} className="image-2" alt="notfound"/> 
                            <div className="overlay-tour">
                        <div className="text-tour">{val.name}
                            <div>
                                Rp. {val.price.toLocaleString()}
                                <hr style={{backgroundColor:"white" }}></hr>
                                <div>
                                <h6><AccessTimeIcon fontSize="small"/> {val.duration}</h6>
                                <h6><FlightIcon fontSize="small"/></h6>
                                <h6><LocationOnIcon fontSize="small"/>&nbsp;{val.location}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
        })
    )

    }
    render() {
        return (
            
            <MDBContainer fluid className="belakang">
                <nav aria-label="breadcrumb" style={{marginTop: "100px"}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active">Tour Domestik</li>
                    </ol>
                </nav>
                <div className="belakang-2"></div>
                    <MDBRow className="d-flex justify-content-center">
                       {this.renderTour()}
                    </MDBRow>
            </MDBContainer>
        
        )
    }
}