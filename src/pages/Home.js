import React, { Component } from 'react';
import Boxinfo from '../component/Boxinfo'
import Axios from 'axios'
import '../style/home.css'
import { MDBContainer, MDBRow} from "mdbreact";
import { search, shield, card, cardjawa, cardbali, cardsulawesi, cardsumatera, cardlombok, cardkupang, cardpulauseribu, cardsabang } from '../img'
import { API_URL } from '../helpers/API_URL'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom'
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'
import CardCity from '../component/CardCity'

class Home extends Component {
    state = {
        allPackages: [],
        tourDomestik: [],
        themePark: [],
        waterPark: [],
        atraksi: []
    }

    async componentDidMount() {
        // Axios.get('http://localhost:4000/getpackage')
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState({ allPackages: res.data })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        const allPackages = await Axios.get(API_URL + '/getpackage')
        const tourDomestik = await Axios.get(API_URL + '/getpackagedomestik')
        const waterPark = await Axios.get(API_URL + '/getwaterpark')
        const themePark = await Axios.get(API_URL + '/getthemepark')
        this.setState({allPackages: allPackages.data})
        this.setState({tourDomestik: tourDomestik.data})
        this.setState({waterPark: waterPark.data})
        this.setState({themePark: themePark.data})
    }


    renderTour = () => {
        return (
            this.state.allPackages.map((val, index) => {
                if (val.id === 1 || val.id === 2 || val.id === 3) {
                    return (
                        <div className="box-2" key={index}>
                            <img src={API_URL + '/' + val.imagePath} className="image" alt="notfound" />
                            <div className="overlay">
                                <div className="text">{val.title}
                                    <div>
                                        Rp. {val.harga.toLocaleString()}
                                        <hr style={{ backgroundColor: "white" }}></hr>
                                        <div>
                                            <h6><AccessTimeIcon fontSize="small" /> {val.duration}</h6>
                                            <h6><LocationOnIcon fontSize="small" />&nbsp;{val.location}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "55px", borderRadius: "30px" }}>
                                    <Link to={`/package-details?id=${val.id}`}>
                                        <input type="button" value="More Info" className="btnInfo" />
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
        return (
            this.state.allPackages.map((val, index) => {
                if (val.id === 4 || val.id === 5 || val.id === 6) {
                    return (
                        <div className="box-2" key={index}>
                            <img src={API_URL + '/' + val.imagePath} className="image" alt="notfound" />
                            <div className="overlay">
                                <div className="text-2">{val.title}
                                    <div>
                                        Rp. {val.harga.toLocaleString()}
                                        <hr style={{ backgroundColor: "white" }}></hr>
                                        <h6><LocationOnIcon fontSize="small" />&nbsp;{val.location}</h6>
                                    </div>
                                </div>

                                <div style={{ marginTop: "55px", borderRadius: "30px" }}>
                                    <Link to={`/package-details?id=${val.id}`}>
                                        <input type="button" value="More Info" className="btnInfo" />
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
                                text="Kemudahan mencari destinasi wisata sesuai keinginan anda"
                                foto={search} />
                            <Boxinfo title="Terpercaya"
                                text="Situs terpercaya di indonesia yang menyediakan layanan perjalanan ke seluruh indonesia"
                                foto={shield} />
                            <Boxinfo title="Harga Terbaik"
                                text="Wujudkan liburan anda dengan paket tour berkualitas dengan harga yang relatif terjangkau"
                                foto={card} />

                        </MDBRow>
                    </MDBContainer>
                    <hr
                        style={{
                            marginTop: "10px",
                            width: "74%"
                        }}>
                    </hr>
                </section>
                <section className="section-3">
                    <h1>Destinasi Terbaik</h1>
                    <div className='content'>
                        {this.renderTour()}
                    </div>
                </section>
                <hr
                    style={{
                        marginTop: "80px",
                        width: "74%"
                    }}>
                </hr>

                <section className="section-3" >
                    <h1>Taman Bermain</h1>
                    <div className="content">
                        {this.renderAttraction()}

                    </div>
                    <hr
                        style={{ marginTop: "80px", width: "74%" }}>
                    </hr>
                    <h1>Mau Kemana ?</h1>

                    <MDBContainer>
                        <MDBRow>
                            <CardCity foto={cardsumatera} title="SUMATERA" />
                            <CardCity foto={cardjawa} title="JAVA" />
                            <CardCity foto={cardkupang} title="KUPANG" />
                            <CardCity foto={cardsulawesi} title="SULAWESI" />
                            <CardCity foto={cardlombok} title="LOMBOK" />
                            <CardCity foto={cardbali} title="BALI" />
                            <CardCity foto={cardpulauseribu} title="PULAU SERIBU" />
                            <CardCity foto={cardsabang} title="SABANG" />
                        </MDBRow>
                    </MDBContainer>

                </section>
                <div className="bannerInfo">
                    <div className="countPackages">
                            <span style={{marginRight: "150px"}}>
                              {this.state.tourDomestik.length}
                            </span>
                            
                            <span style={{marginRight: "150px", marginLeft: "40px"}}>
                                {this.state.themePark.length}
                            </span>

                            <span style={{marginLeft: "40px"}}>
                                {this.state.waterPark.length}
                            </span>
                    </div>

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