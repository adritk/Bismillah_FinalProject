import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation
} from "mdbreact";
import "../style/signinup.css";
import { Button } from '@material-ui/core'

import { connect } from 'react-redux'
import { onLogin, KeepLogin} from '../redux/action'
import { Redirect } from 'react-router-dom'

import {undrawtravel} from '../img'

class Login extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  onBtnLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username === '' || password === '') {
      alert('isi semua kolom')
    }
    else {
      this.props.onLogin(username, password)
    }
  }

  render() {
    // console.log(this.props.role)
    if (this.props.role === 'admin') {
      return (
        <Redirect to="/admin">

        </Redirect>
      )
    } else if (this.props.role === 'user') {
      return (
        <Redirect to="/">

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
                  <h1 className="h1-responsive font-weight-bold fontStyle">
                    Sign in right now!
                    </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4 fontStyle">
                    Enjoy your destination
                    </h3>

                  <div style={{height: '400px'}} className="fotoLogin"></div>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text-change">
                        <h3 className="text-center" style={{color: 'white'}}>Login Here</h3>
                        <hr className="hr-light" />


                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text" style={{ float: 'left' }}>
                          Your email
                            </label>
                        <input type="text" id="defaultFormLoginEmailEx" className="form-control" ref="username" />
                        <br />

                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{ float: 'left', color:'black'}}>
                          Your password
                            </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" ref="password" />


                        <div className="text-center mt-4 black-text">
                        <Button style={{outline: 'none'}} color="#424242" variant="contained" onClick={this.onBtnLogin}>Sign In</Button>
                          <hr className="hr-light" />
                        </div>

                        <div style={{
                          width: '300px',
                          height: '30px',
                          backgroundColor: 'whitesmoke',
                          borderRadius: '20px',
                          marginLeft: '50px',
                          paddingTop: '3px'
                        }}>
                        <a href="/register" style={{color:'black'}}>Don't have an account? Sign up here</a>
                        </div>
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
    // verified: state.user.verified,
    username: state.user.username,
    // email: state.user.email,
    role: state.user.role
  }
}
export default connect(mapStateToProps, { onLogin, KeepLogin})(Login);
