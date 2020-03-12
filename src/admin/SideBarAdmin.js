import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import PersonIcon from '@material-ui/icons/Person';

import { connect } from 'react-redux'
import { Logout } from '../redux/action'

import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class SideBarAdmin extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

onBtnLogout = () => {
  localStorage.removeItem('token')
  this.props.Logout()
}

render() {
  if(this.props.role === 'admin') {

    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/admin">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/manageproduct">Manage Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/managecategory">Manage Category</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/allcart">Cart</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/customers">Customers</MDBNavLink>
            </MDBNavItem>
        
          </MDBNavbarNav>
          <MDBNavbarNav right>
                  <div style={{color: "white", marginRight: 10}}>
                      {
                        this.props.role
                        ?
                        `HI! ${this.props.username}`
                        :
                        <PersonIcon />
                      }
                      </div>

                                <Link to="/login">
                                <div onClick={this.onBtnLogout} className="textLogout">
                                    <ExitToAppIcon />
                                    Logout
                                </div>
                                </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
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

export default connect(mapStateToProps, {Logout}) (SideBarAdmin);