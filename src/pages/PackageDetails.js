import React, { Component } from 'react';
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'

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
                    <div style={{paddingBottom: 150}}>
                    <Navfix />
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className='col-4'>
                            {tour.title}
                            <img src={API_URL + '/' + tour.imagePath} className="image" alt="notfound"/>
                            </div>
                            <div className="itinerary" dangerouslySetInnerHTML={{__html:`${this.state.tour.itinerary}`}}></div>
                        </div>
                    </div>
{/* 
                    <div id="footer">
                            <Footer />
                        </div> */}
            </div>
          );
    }
}
 
export default PackageDetails;