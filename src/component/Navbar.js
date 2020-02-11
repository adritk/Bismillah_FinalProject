import React, { Component } from 'react'
import '../style/navbar.css'
import { Link} from 'react-router-dom';


class NavbarPage extends Component {

state = {
  top : 0,
  prevScrollpos : window.pageYOffset
}
componentDidMount () {
  window.addEventListener('scroll', this.handleScroll)
}

handleScroll = () => {
  let {prevScrollpos} = this.state
  console.log('prevScrollpos : ' + prevScrollpos)
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      this.setState({top : 0})
  } else {
      this.setState({top : -100})
  }
  this.setState({prevScrollpos : currentScrollPos})
}

render() {
  let {top} = this.state
  let style = {
      top : `${top}px`
      
  }
  return (
    <div id="navbar" style = {style} >
        <div className="wrap">
        <a className="underline" href="/">Home</a>
        <a className="underline" href="/paket-tour">Tour Domestik</a>
        <a className="underline" href="#contact">Contact</a>
        </div>
      
      <div className="sign-in">
          <Link to="/login">
              <button type="button" className="login" style={{float: "right"}}>Masuk</button>
          </Link>
                
          <Link to="/register"> 
              <button type="button" className="register" style={{float: "right"}}>Daftar</button>     
          </Link>
      </div>
  </div>

    );
  }
}

export default NavbarPage;


    