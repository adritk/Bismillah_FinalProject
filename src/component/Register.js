import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "../style/signinup.css";
import Axios from "axios";
import { API_URL } from "../helpers/API_URL";
import {connect} from "react-redux"
import {userRegister} from "../redux/action"
import {Redirect} from 'react-router-dom'

class Register extends React.Component {
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


  state = {
    collapseID: "",
    char: false,
    spec: false,
    num: false,
    show: false,
    border: false
  };

  registerUser = () => {
      let {char, spec, num} = this.state
      let username = this.refs.username.value
      let email = this.refs.email.value
      let password = this.refs.password.value
      let confirmPass = this.refs.confirmPass.value

      if (username && email && password && confirmPass) {
          if (password === confirmPass) {
              // alert('password match')
              let data = {
                username,
                email,
                password,
                role : 'user'
              }
              alert('register success')
              this.props.userRegister(data)
          } 
          else if (password !== confirmPass) 
          {
            alert('password must be same')
          }
      }
      else 
      {
        alert('please fill all this form')
      }
}
  

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );

    if(this.props.username) {
      return (
        <Redirect to="/login">
x`
        </Redirect>
      )
    }
    
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient-change">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4">
                    Enter your personal details and start journey with us!  
                  </h3>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text-change">
                        <h3 className="text-center">Register Here</h3>
                        <hr className="hr-light" />

                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{float: 'left'}}>
                              Username
                            </label>
                            <input type="text" id="defaultFormLoginEmailEx" className="form-control" ref="username" />
                            <br />

                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{float: 'left'}}>
                              Email
                            </label>
                            <input type="text" id="defaultFormLoginPasswordEx" className="form-control" ref="email" />
                            <br />

                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{float: 'left'}}>
                              Password
                            </label>
                            <input type="password" id="defaultFormLoginPasswordEx" className="form-control" ref="password" />
                            <br />
                            
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{float: 'left'}}>
                              Confirm Password
                            </label>
                            <input type="password" id="defaultFormLoginPasswordEx" className="form-control" ref="confirmPass" />



                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo" gradient="purple" className="onBtn" onClick={this.registerUser}>Sign Up</MDBBtn>
                          <hr className="hr-light" />
                        </div>
                        <a href="/login">Have an account? Sign in here</a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
} 

export default connect(mapStateToProps, {userRegister}) (Register);
