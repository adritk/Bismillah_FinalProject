import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotFound from './component/NotFound'
import { connect } from 'react-redux'
import { onLogin } from './redux/action'
import './App.css';

// ROUTE ADMIN
import ManageProduct from './admin/ManageProduct'
import ManageCategory from './admin/ManageCategory'
import Admin from './admin/Admin'
import Customers from './admin/Customers'

// ROUTE USERS
import ManageDescription from './admin/ManageDescription';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Attraction from './pages/Attraction';
import Register from './component/Register';
import Login from './component/Login';
import PackageDetails from './pages/PackageDetails';
import Verified from './pages/Verified'
import CartUser from './pages/CartUser'


class App extends Component {

  render() {
    if (this.props.role === 'user') {
      return (
        <div className="App">
          <Route path='/' component={Home} exact />
          <Route path='/tourdomestik' component={Tour} />
          <Route path='/tiketatraksi' component={Attraction} />
          <Route path='/package-details' component={PackageDetails} />
          <Route path='/verified' component={Verified} />
          <Route path='/cartuser' component={CartUser} />
          </div>
          )
        } 
        
        else if(this.props.role === 'admin'){
            return (
          <div className="App">
            <Route path='/manageproduct' component={ManageProduct} />
            <Route path='/managecategory' component={ManageCategory} />
            <Route path='/managedescription' component={ManageDescription} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/customers' component={Customers} />
          </div>

            )
        } else {
          return (
          <div>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/' component={Home} exact />
            <Route path='/tourdomestik' component={Tour} />
            <Route path='/tiketatraksi' component={Attraction} />
            <Route path='/package-details' component={PackageDetails} />
          </div>
          )
        }
        
  

        
       }
     }
     
const mapStateToProps = (state) => {
  return {
            role: state.user.role
      }
    }
    
export default connect(mapStateToProps, {onLogin}) (App);
          
          
// console.disableYellowBox = true