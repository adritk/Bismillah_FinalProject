import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class SideBarAdmin extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
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
              <MDBNavLink to="/managedescription">Manage Description</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/customers">Customers</MDBNavLink>
            </MDBNavItem>
        
          </MDBNavbarNav>
          <MDBNavbarNav right>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default SideBarAdmin;