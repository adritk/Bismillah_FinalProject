import React, { Component } from 'react';
import Axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {MDBContainer, MDBRow } from 'mdbreact';
import {API_URL} from '../helpers/API_URL'
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
class Attraction extends Component {
    state = {
        attraction : []
    }

    componentDidMount() {
        Axios.get(API_URL + '/gettiketattraction')
        .then((res) => {
            this.setState({attraction: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderAttraction = () => {  
        return(
            this.state.attraction.map((val,index) => {
                    return (
                        <div className="box-tour" key={index}>
                        <img src = {API_URL + '/' + val.imagePath} className="image-2" alt="notfound"/> 
                            <div className="overlay-tour">
                        <div className="text-tour" style={{marginTop: "75px"}}>{val.title}
                            <div>
                                Rp. {val.harga.toLocaleString()}
                                <hr style={{backgroundColor:"white" }}></hr>
                                <div>
                                <h6><LocationOnIcon fontSize="small"/>&nbsp;{val.location}</h6>
                                </div>
                            </div>
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
            <div style={{paddingTop:"110px", marginBottom: "100px"}}>
                <MDBContainer>
                    <MDBRow >
                        {this.renderAttraction()}
                    </MDBRow>
                </MDBContainer>
            </div>
            <div id="footer">
                        <Footer />
                    </div>
        </div>
          );
    }
}
 
export default Attraction;