import React from 'react';
import '../style/footer.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
      <div className="footer">
        <div className="row-1">
            <h3>Kontak Kami</h3>
            <div className="logoInfo">
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
                <span>&nbsp; &nbsp;Adirsca@travelindo.com</span>
            </div>
        </div>
      </div>
    )
}

export default Footer