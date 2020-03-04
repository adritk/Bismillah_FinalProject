import React, {Component} from 'react';
import Boxinfo from '../component/Boxinfo'
import Axios from 'axios'
import '../style/home.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage} from "mdbreact";
import {search,shield,card,cardjawa,cardbali,cardsulawesi,cardsumatera,cardlombok,cardkupang,cardpulauseribu,cardsabang} from '../img'
import {API_URL} from '../helpers/API_URL'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'

class Home extends Component {
    state = {
        products: []
    }
    
    componentDidMount = () => {
        Axios.get('http://localhost:4000/getpackage')
        .then((res) => {
            // console.log(res.data)
            this.setState({products: res.data})
        })
        .catch((err) =>{
            console.log(err)
        })  
    }

   
    renderTour = () => {
        return (
            this.state.products.map((val,index) => {
                if(val.id == 1 || val.id == 2 || val.id == 3) {
                    return (           
                        <div className="box-2" key={index}>
                        <img src={API_URL + '/' + val.imagePath} className="image" alt="notfound"/> 
                        <div className="overlay">
                            <div className="text">{val.title}
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
                                <input type="button" value="More Info" className="btnInfo"/>
                            </Link>
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
                this.state.products.map((val,index) => {
                    if(val.id == 4 || val.id == 5 || val.id == 6) {
                        return (
                            <div className="box-2" key={index}>
                        <img src = {API_URL + '/' +val.imagePath} className="image" alt="notfound"/> 
                        <div className="overlay">
                            <div className="text-2">{val.title}
                                <div>
                                    Rp. {val.harga.toLocaleString()}
                                    <hr style={{backgroundColor:"white"}}></hr>
                                    <h6><LocationOnIcon fontSize="small"/>&nbsp;{val.location}</h6>
                                </div>
                            </div>

                            <div style={{marginTop: "55px", borderRadius: "30px"}}>
                            <Link to={`/package-details?id=${val.id}`}>
                                <input type="button" value="More Info" className="btnInfo"/>
                            </Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            })
            )
        }
        
        render() { 
            const style = {
                marginTop: "25px", 
                color: "white",
                paddingBottom : 25
             }
            return ( 
                <div> 
                <Navfix />
            <section className="header">
               <h1>Mari Jelajahi Keindahan Indonesia</h1>
               <p>Kepuasan Anda adalah tujuan kami</p>
            </section>

            
               <section className="section-2">
                   <h1>Mengapa Liburin ?</h1>  
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
                <hr 
                style={{marginTop: "80px",width: "74%"}}>
                </hr>
                <h1>Mau Kemana ?</h1>

<div style={style}> 
  <MDBRow  >
    <MDBCol md="3">
        <MDBCard style={{ width: "16rem" }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardsumatera} waves />
            <div className="centered">SUMATERA</div>
        </MDBCard>
    </MDBCol>

    <MDBCol md="3">
        <MDBCard style={{ width: "16rem"  }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardjawa} waves />
            <div className="centered">JAVA</div>
        </MDBCard>
    </MDBCol>


    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardkupang} waves />
        </MDBCard>
        <div className="centered">KUPANG</div>
    </MDBCol>


    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardsulawesi} waves />
        </MDBCard>
        <div className="centered">SULAWESI</div>
    </MDBCol>
  </MDBRow>


  
</div>
<div style={{color: "white"}}>
<MDBRow  >
    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
    <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardlombok} waves />
    <div className="centered">LOMBOK</div>
    </MDBCard>
    </MDBCol>
    
    <MDBCol md="3">
    <MDBCard style={{ width: "16rem"  }}>
    <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardsabang} waves />
    <div className="centered">ACEH</div>
    </MDBCard>
    </MDBCol>
    
    
    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
    <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardpulauseribu} waves />
    </MDBCard>
    <div className="centered">PULAU SERIBU</div>
    </MDBCol>
    
    
    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
    <MDBCardImage style={{height: "15rem"}} className="img-fluid" src={cardbali} waves />
    </MDBCard>
    <div className="centered">BALI</div>
    </MDBCol>
</MDBRow>
</div>

                </section>
                <div className="bannerInfo">
                        <ul>
                            <li>   
                                <p>Paket Tour</p>
                            </li>
                            <li>
                                <p>Theme Park</p>
                            </li>
                            <li>
                                <p>Water Park</p>
                            </li>
                        </ul>
                </div>
                
                        <div id="footer">
                            <Footer />
                        </div>
            </div>
            
            );
            
        }
    }
    
export default Home;