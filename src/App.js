import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound'
import { connect } from 'react-redux'
import { KeepLogin } from './redux/action'
import './App.css';


// ROUTE ADMIN
import ManageProduct from './admin/ManageProduct'
import ManageCategory from './admin/ManageCategory'
import Admin from './admin/Admin'
import Customers from './admin/Customers'
import AllCartUser from './admin/AllCartUser';
import TransactionUser from './admin/AllTransactionUser';

// ROUTE USERS;
import Home from './pages/Home';
import Tour from './pages/Tour';
import Attraction from './pages/Attraction';
import Register from './component/Register';
import Login from './component/Login';
import PackageDetails from './pages/PackageDetails';
import Verified from './pages/Verified'
import CartUser from './pages/CartUser'
import CheckoutUser from './pages/CheckoutUser'
import HistoryUser from './pages/HistoryUser'


class App extends Component {

  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token) {
      this.props.KeepLogin()
    }
  }

  render() {
    if (this.props.role === 'user') {
    return (
      <div className="App">
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/tourdomestik' component={Tour} />
        <Route path='/tiketatraksi' component={Attraction} />
        <Route path='/package-details' component={PackageDetails} />
        <Route path='/verified' component={Verified} />
        <Route path='/cartuser' component={CartUser} />
        {/* <Route path='/manageproduct' component={ManageProduct} />
        <Route path='/managecategory' component={ManageCategory} />
        <Route path='/admin' component={Admin} />
        <Route path='/customers' component={Customers} /> */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/checkout' component={CheckoutUser} />
        <Route path='/history' component={HistoryUser} />
        <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
    } 

    else if(this.props.role === 'admin'){
        return (
      <div className="App">
        <Switch>
        <Route path='/manageproduct' component={ManageProduct} />
        <Route path='/managecategory' component={ManageCategory} />
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/customers' component={Customers} />
        <Route path='/allcart' component={AllCartUser} />
        <Route path='/transactionusers' component={TransactionUser} />
        <Route path='*' component={NotFound} />
      </Switch>
      </div>

        )
    } else {
      return (
        <div className="App">
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/tourdomestik' component={Tour} />
        <Route path='/tiketatraksi' component={Attraction} />
        <Route path='/package-details' component={PackageDetails} />
        <Route path='*' component={NotFound} />
        </Switch>
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

export default connect(mapStateToProps, { KeepLogin})(App);


// console.disableYellowBox = true