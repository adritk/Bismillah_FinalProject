import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/navfic.css'
import CallIcon from '@material-ui/icons/Call';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PlaceIcon from '@material-ui/icons/Place';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ReceiptIcon from '@material-ui/icons/Receipt';
import InfoIcon from '@material-ui/icons/Info';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { logoliburin } from '../img'

import { connect } from 'react-redux'
import { Logout } from '../redux/action'
import { API_URL } from '../helpers/API_URL';
import Axios from 'axios'



class Navfix extends Component {
    state = {
        cartuser : []
    }

//    async componentDidMount(id) {
//         const cartuser = await Axios.get(API_URL + `/getallcartbyid/${id}`)
//         this.setState({cartuser: cartuser.data})
//     }

    // componentDidMount() {
        
    // }

    onBtnLogout = () => {
        localStorage.removeItem('token')
        this.props.Logout()
    }

    render() {
        if (this.props.role === 'user') {
            return (
                <div className="myNavbar">
                    <div className="first-nav">
                        <ul className="left-nav">
                            <li>
                                <p><CallIcon />&nbsp;Any Questions Call Us</p>
                            </li>
                            <div>
                                <img src={logoliburin} alt="notfound" style={{ height: '65px', width: '175px', marginTop: '-10px' }} />
                            </div>

                        </ul>
                        <ul className="right-nav">
                            {
                                this.props.role
                                    ?
                                    `Hello, ${this.props.username}`
                                    :
                                    <PersonIcon />
                                }

                            <li>
                                <Link to={{
                                    pathname: '/cartuser', 
                                    state: {
                                        id: this.props.id
                                    }}}>
                                <div className="textLogout">
                                    {/* <span style={{
                                        position: 'absolute',
                                        top: '2px',
                                        left: '1261px',
                                        backgroundColor: 'darkblue',
                                        borderRadius: '50%',
                                        height: '20px',
                                        width: '20px',
                                        lineHeight: '20px',
                                        
                                    }}>

                                    {this.state.cartuser.length}
                                    </span> */}
                                   
                                    
                                    <ShoppingCartIcon />
                                    
                                    Cart
                                
                                </div>
                                </Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: '/history', 
                                    state: {
                                        id: this.props.id
                                    }}}>
                                <div className="textLogout">
                                <ReceiptIcon />
                                    History
                                </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/login">
                                <div onClick={this.onBtnLogout} className="textLogout">
                                    <ExitToAppIcon />
                                    Logout
                                </div>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="second-nav">
                        <ul className="menu-nav">
                            <div style={{marginRight: 300}}>

                            <Link to="/" style={{ color: "black" }}>
                                <li>
                                    <HomeIcon className="iconNav" />Home
                            </li>
                            </Link>

                            <Link to="/tourdomestik" style={{ color: "black" }}>
                                <li>
                                    <PlaceIcon className="iconNav" />Tour Domestik
                            </li>
                            </Link>

                            <Link to="/tiketatraksi" style={{ color: "black" }}>
                                <li>
                                    <ConfirmationNumberIcon className="iconNav" />Tiket Atraksi
                            </li>
                            </Link>

                            <li><PhotoCameraIcon className="iconNav" />Gallery</li>
                            <li>
                                <InfoIcon className="iconNav" />
                                <AnchorLink className="penting" href='#footer' style={{ color: "black" }}>About Us
                                </AnchorLink>
                            </li>

                            </div>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="myNavbar">
                    <div className="first-nav">
                        <ul className="left-nav">
                            <li>
                                <p><CallIcon />&nbsp;Any Questions Call Us</p>
                            </li>
                            <div>
                                <img src={logoliburin} alt="notfound" style={{ height: '65px', width: '175px', marginTop: '-10px' }} />
                            </div>

                        </ul>
                        <ul className="right-nav">
                            <Link to="/login">
                                <li className="login">
                                    <ExitToAppIcon />
                                    Login
                                </li>
                            </Link>
                            <Link to="/register">
                                <li className="login">
                                    <PersonIcon />
                                    Register
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="second-nav">
                        <ul className="menu-nav">
                            <div style={{marginRight: 300}}>

                            <Link to="/" style={{ color: "black" }}>
                                <li>
                                    <HomeIcon className="iconNav" />Home
                            </li>
                            </Link>

                            <Link to="/tourdomestik" style={{ color: "black" }}>
                                <li>
                                    <PlaceIcon className="iconNav" />Tour Domestik
                            </li>
                            </Link>

                            <Link to="/tiketatraksi" style={{ color: "black" }}>
                                <li>
                                    <ConfirmationNumberIcon className="iconNav" />Tiket Atraksi
                            </li>
                            </Link>

                            <li><PhotoCameraIcon className="iconNav" />Gallery</li>
                            <li>
                                <InfoIcon className="iconNav" />
                                <AnchorLink className="penting" href='#footer' style={{ color: "black" }}>About Us
                                </AnchorLink>
                            </li>

                            </div>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        role: state.user.role,
        id: state.user.id
    }
}

export default connect(mapStateToProps, { Logout })(Navfix)
