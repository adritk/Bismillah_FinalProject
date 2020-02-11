import React from 'react';
import {Link } from 'react-router-dom'
import '../style/navfic.css'
import CallIcon from '@material-ui/icons/Call';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PlaceIcon from '@material-ui/icons/Place';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InfoIcon from '@material-ui/icons/Info';

const Navfix = () => {
    return(
            <div className="myNavbar">
                <div className="first-nav">
                    <ul className="left-nav">
                        <li>
                            <p><CallIcon/>&nbsp;Any Questions Call Us</p>
                        </li>
                    </ul>
                    <ul className="right-nav">
                        <Link to="/login">
                        <li className="login">
                            <ExitToAppIcon/>
                             Login
                        </li>
                        </Link>
                        <li><PersonIcon/>Register</li>
                    </ul>
                </div>

                    <div className="second-nav">
                        <ul className="menu-nav"> 
                        <li><HomeIcon className="iconNav"/>Home</li>
                        <li><PlaceIcon className="iconNav"/>Tour Domestik</li>
                        <li><ConfirmationNumberIcon className="iconNav"/>Tiket Atraksi</li>
                        <li><PhotoCameraIcon className="iconNav"/>Gallery</li>
                        <li><InfoIcon className="iconNav"/><a href="#footer" className="page-scroll">About Us</a></li>
                        </ul>
                    </div>
            </div>
            
    )
}
export default Navfix
