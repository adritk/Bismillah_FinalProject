  import React from "react";
  import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation
  } from "mdbreact";
  import "../style/signinup.css";
  import PersonIcon from '@material-ui/icons/Person';

  class Login extends React.Component {
    state = {
      collapseID: ""
    };

    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));

    render() {
      const overlay = (
        <div
          id="sidenav-overlay"
          style={{ backgroundColor: "transparent" }}
          onClick={this.toggleCollapse("navbarCollapse")}
        />
      );
      return (
        <div id="classicformpage">
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                  >
                    <h1 className="h1-responsive font-weight-bold">
                      Sign in right now!
                    </h1>
                    <hr className="hr-light" />
                    <h3 className="mb-4">
                      Enjoy your destination
                    </h3>
                  </MDBAnimation>

                  <MDBCol md="6" xl="5" className="mb-4">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard id="classic-card">
                        <MDBCardBody className="white-text">
                          <h3 className="text-center"> Login Here</h3>
                          <hr className="hr-light" />
              
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your name"
                            type="text"
                          />
                          
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your password"
                            type="password"
                            />

      
                          <div className="text-center mt-4 black-text">
                          <MDBBtn gradient="purple" className="onBtn">Sign In</MDBBtn>
                            <hr className="hr-light" />
                          </div>
                          <a href="/register">Don't have an account? Sign up here</a>
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

  export default Login;
