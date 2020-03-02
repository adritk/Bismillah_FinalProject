import React, { Component } from 'react';
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import '../style/packagedetails.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class PackageDetails extends Component {
    state = {
        tour : []
    }

    componentDidMount() {
        let id = this.props.location.search.split('=')[1]
        console.log(id)
        Axios.get(API_URL + `/getpackagebyid/${id}`)
        .then((res) => {
            console.log(res.data)
            this.setState({tour: res.data[0]})
            console.log(this.state.tour)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() { 
        let { tour } = this.state;
        return (
            <div>
                <div style={{paddingBottom: 150, minHeight: "0px"}}>
                    <Navfix />
                </div>
                    <div className='container'>
                        <div className="row">
                            <div className='col-4'>
                             
                                <img src={API_URL + '/' + tour.imagePath} className="image" alt="notfound"/>
                            </div>
                          
                                <div className="kotakDetails">
                                    <div className="textTitle">
                                         {tour.title}
                                    </div>
                                    <div className="hargaStyle">
                                        <LocalOfferIcon />
                                        <span className="textHarga">Rp. {tour.harga}</span>
                                    </div>
                                    <hr style={{width: '63%'}}></hr>

                                    <div className="timeStyle">
                                        <AccessTimeIcon />
                                       <span className="textDuration"> {tour.duration} </span> 
                                    </div>
                                        <hr style={{width: '63%'}}></hr>

                                    <div className="locationStyle">
                                        <LocationOnIcon />
                                       <span className="textLocation"> {tour.location} </span> 
                                    </div>
                                        <hr style={{width: '63%'}}></hr>
                                </div>
                           
                        </div>
                    </div>
                        <div className="fontItinerary">
                            <DirectionsBusIcon fontSize='large' color="primary" style={{ fontSize: 40 }}/>
                            <span>ITINERARY</span>
                        </div>
                                <div className="itinerary" dangerouslySetInnerHTML={{__html:`${this.state.tour.itinerary}`}}>

                                </div>

                    {/* <div id="footer">
                            <Footer />
                        </div> */}
            </div>
          );
    }
}
 
export default PackageDetails;