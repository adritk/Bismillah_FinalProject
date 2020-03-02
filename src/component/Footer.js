import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../style/footer.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
<div className="footer">

    <MDBContainer>
        <MDBRow>
            <MDBCol md="4">
                <div className="row-1">
                    <div className="logoInfo">
                    <h3>Kontak Kami</h3>
                    <hr 
                    style={{border: "2px solid grey",
                            width: "42%",
                            marginLeft: "3px",
                            borderRadius: "2px"
                             }}
                    
                    />
                        <LocationOnIcon />
                        <div className="textInfo">
                            <span>BSD Green Office GOP 9 - G Floor, BSD City Tangerang Banten</span>
                        </div>
                    </div>
                        <div className="logoPhone">
                            <PhoneIcon /> 
                            <span> &nbsp; 085156240856</span>
                        </div>

                        <div className="logoEmail">
                            <EmailIcon /> 
                            <span>&nbsp; &nbsp;Adirsca@AnterIn.com</span>
                        </div>
                </div>

        
        
                </MDBCol>
                <MDBCol md="4">
                    <div className="row-1">
                    <div className="paketTour">
                    <h3>Layanan Kami</h3>
                    <hr 
                    style={{border: "2px solid grey",
                            width: "50%",
                            marginLeft: "81px",
                            borderRadius: "2px"
                             }}
                    />
                      
                            <span style={{marginLeft: "-20px"}}>Paket Tour Indonesia</span>
                    </div>

                        <div className="tiketAtraksi">
                            <span style={{marginLeft: "-78px"}}>Tiket Taman Hiburan</span>
                        </div>

                        <div className="tiketAir">
                            <span style={{marginLeft: "-78px"}}>Tiket Taman Air</span>
                        </div>


                        <div className="infoWisata">
                            <span style={{marginLeft: "-45px"}}>Informasi Wisata</span>
                        </div>
                    </div>
                
                </MDBCol>



                <MDBCol md="4">
                    <div className="row-1">
                        <div className="tentangKami">
                        <h3>Tentang Kami</h3>
                        <hr 
                    style={{border: "2px solid grey",
                            width: "50%",
                            marginLeft: "0px",
                            borderRadius: "2px"
                             }}
                    />
                        <span>Liburin merupakan penyedia jasa layanan wisata untuk para traveler yang ingin berlibur dengan nyaman, aman, dan menyenangkan. </span>
                        </div>
                    </div>
                </MDBCol>
        </MDBRow>
    </MDBContainer>

</div>











    //   <div className="footer">
    //     <div className="row-1">
    //         <h3>Kontak Kami</h3>
    //         <div className="logoInfo">
    //             <LocationOnIcon />
    //                 <div className="textInfo">
    //                     <span>BSD Green Office GOP 9 - G Floor, BSD City Tangerang Banten</span>
    //                 </div>
    //         </div>

    //         <div className="logoPhone">
    //             <PhoneIcon /> 
    //             <span> &nbsp; 085156240856</span>
    //         </div>

    //         <div className="logoEmail">
    //             <EmailIcon /> 
    //             <span>&nbsp; &nbsp;Adirsca@travelindo.com</span>
    //         </div>
    //     </div>

    //     <div className="row-2">

    //     </div>
    //   </div>
    )
}

export default Footer