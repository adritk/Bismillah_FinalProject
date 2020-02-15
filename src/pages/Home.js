import React, {Component} from 'react';
import Boxinfo from '../component/Boxinfo'
import Axios from 'axios'
import '../style/home.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage} from "mdbreact";
import {search} from '../img'
import {shield} from '../img'
import {card} from '../img'
import {API_URL} from '../helpers/API_URL'
import {Button, CustomInput} from 'reactstrap'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import FlightIcon from '@material-ui/icons/Flight';
import Navfix from '../component/Navfix';
import Footer from '../component/Footer'

class Home extends Component {
    state = {
        tour: [],
        addImageFileName : 'Select File',
        addImageFile : undefined
    }
    
    componentDidMount = () => {
        Axios.get('http://localhost:4000/image/getproducts')
        .then((res) => {
            console.log(res.data)
            this.setState({tour: res.data})
        })
        .catch((err) =>{
            console.log(err)
        })
       
    }

    onBtnUploadFile = (e) => {
        if(e.target.files[0]){
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile : e.target.files[0] })
        }else{
            this.setState({ addImageFileName: 'Select Image', addImageFile: undefined})
        }
    }

    uploadImage = () => {
        let { addImageFile } = this.state;
        console.log(addImageFile)
        if(addImageFile){
            let formData = new FormData()
            formData.append('image', addImageFile)
            Axios.post(API_URL + '/image/upload', formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    
    renderTour = () => {
        return (
            this.state.tour.map((val,index) => {
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
                        </div>
                    </div>
                    )
                }
            })
            )
        }
        
        render() { 
            const style = {
                display : 'flex',
                flexDirection : 'row',
                flexWrap : 'wrap',
                justifyContent : 'space-between',
                marginTop: "25px", 
                textAlign: "center",
                color: "white"
             }
            return ( 
                <div> 
                <Navfix />
            <section className="header">
               <h1>Mari Jelajahi Keindahan Indonesia</h1>
               <p>Kepuasan Anda adalah tujuan kami</p>
            </section>

            
               <section className="section-2">
                   <h1>Mengapa AnterIn ?</h1>  
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
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src="https://3.bp.blogspot.com/-lVP5yyt8kPw/V42cfBpTcqI/AAAAAAAAALU/NPsgvWOiqkYN8IJqr1c4FDOBuAVmIVnrgCEw/s1600/gadang.JPG" waves />
            <div className="centered">SUMATERA</div>
        </MDBCard>
    </MDBCol>

    <MDBCol md="3">
        <MDBCard style={{ width: "16rem"  }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src="https://www.bestfunforall.com/wallpaperbetter/imgs/Borobudur%20Temple%20Indonesia%20wallpaper%20%2012.jpg" waves />
            <div className="centered">JAVA</div>
        </MDBCard>
    </MDBCol>


    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src="https://perjuanganonline.com/wp-content/uploads/2019/07/1607bali2.jpg" waves />
        </MDBCard>
        <div className="centered">BALI</div>
    </MDBCol>


    <MDBCol md="3">
    <MDBCard style={{ width: "16rem" }}>
            <MDBCardImage style={{height: "15rem"}} className="img-fluid" src="https://4.bp.blogspot.com/-gK6Z7mY_aLo/VQAoCaiZWdI/AAAAAAAAAGE/nC3eXivqnr4/s1600/IMG_3391-1600x900.jpg" waves />
        </MDBCard>
        <div className="centered">SULAWESI</div>
    </MDBCol>
  </MDBRow>
</div>

                </section>
                <div className="bannerInfo">
                <MDBContainer>  

                <MDBRow> 
                <MDBCol md="4">
                   <h1>50</h1>
                    <p >
                        Paket Tour
                    </p>
                </MDBCol>

                <MDBCol md="4">
                    <h1>50</h1>
                    <p >
                        Theme Park
                    </p>
                </MDBCol>

                <MDBCol md="4">
                    <h1>50</h1>
                    <p >
                        Water Park
                    </p>
                </MDBCol>

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
    
export default Home;
    
                            {/* <div style={{marginTop: "500px"}}>
                            <CustomInput onChange={this.onBtnUploadFile} label={this.state.addImageFileName} type='file'/>
                    <Button onClick={this.uploadImage}>
                        Upload 
                    </Button>
                            </div> */}