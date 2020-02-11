import React from 'react'
import '../style/footer.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const Footerinfo = (props) => {
    return (
    <div className="footer">
        <div className="row-1">
            <h3>ABOUT US</h3>
            <div className="logoInfo">
                <LocationOnIcon />
                    <div className="textInfo">
                        <span>{props.address}</span>
                    </div>
            </div>

            <div className="logoPhone">
                <PhoneIcon /> 
                <span>&nbsp;{props.phone}</span>
            </div>
        </div>
    </div>
    )
}

export default Footerinfo