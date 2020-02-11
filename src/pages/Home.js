import React, {Component} from 'react';
import Boxinfo from '../component/Boxinfo'
import Axios from 'axios'
import '../style/home.css'
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import {search} from '../img'
import {shield} from '../img'
import {card} from '../img'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import FlightIcon from '@material-ui/icons/Flight';
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
import $ from 'jquery'

class Home extends Component {
    state = {
        tour: []
    }
    
    componentDidMount = () => {
        Axios.get('http://localhost:2000/package')
        .then((res) => {
            console.log(res.data)
            this.setState({tour: res.data})
        })
        .catch((err) =>{
            console.log(err)
        })
        $('.page-scroll').on('click', function() {
            var tujuan = $(this).attr('href') 

            var elemenTujuan = $(tujuan)
            // console.log(elemenTujuan.offset().top)
            $('body').animate({
                scrollTop : elemenTujuan.offset().top - 50
            }, 1250, 'linear')

      
        });
    }
    
    renderTour = () => {
        return (
            this.state.tour.map((val,index) => {
                if(val.id == 1 || val.id == 2 || val.id == 3){
                    return (           
                        <div className="box-2" key={index}>
                        <img src = {val.image} className="image" alt="notfound"/> 
                        <div className="overlay">
                            <div className="text">{val.name}
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
        
        renderAttraction = () => {
            return(
                this.state.tour.map((val,index) => {
                    if(val.id == 31 || val.id == 32 || val.id == 33) {
                        return (
                            <div className="box-3" key={index}>
                        <img src = {val.image} className="image" alt="notfound"/> 
                        <div className="overlay-2">
                            <div className="text-home-tour">{val.name}
                                <div>
                                    Rp. {val.price.toLocaleString()}
                                    <hr style={{backgroundColor:"white"}}></hr>
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
                <div> 
                           <Navfix />
            <section className="header">
               <h1>Mari Jelajahi Keindahan Indonesia</h1>
               <p>Kepuasan Anda adalah tujuan kami</p>
            </section>

            
               <section className="section-2">
                   <h1>Why Travel ?</h1>  
                   <MDBContainer>
                       <MDBRow>
                            <Boxinfo title="Carinya Mudah" 
                                     text= "Kemudahan mencari destinasi wisata sesuai keinginan anda"
                                     foto= {search}/>
                            <Boxinfo title="Terpercaya"
                                     text= "Situs terpercaya di indonesia yang menyediakan layanan perjalanan ke seluruh indonesia"
                                     foto= {shield}/>      
                            <Boxinfo title="Harga Terbaik"
                                     text= "Wujudkan liburan anda dengan paket tour berkualitas dengan harga yang relatif terjangkau"
                                     foto= {card}/>

                       </MDBRow>
                   </MDBContainer>
                    <hr 
                    style={{marginTop: "10px",
                    width: "74%"
                }}>
                    </hr>
                </section>
                <section className="section-3">
                <h1>Destinasi Terbaik</h1>
                <div className = 'content'>
                {this.renderTour()}
                </div>
                </section>
                <hr 
                style={{marginTop: "80px",
                            width: "74%"
                        }}>
                </hr>
                
                <section className="section-3" >
                <h1>Taman Bermain</h1>
                <div className= "content">
                    {this.renderAttraction()}
                </div>

                </section>
                        <div id="footer">
                            <Footer />
                        </div>
            </div>
            
         );
    }
}
 
export default Home;