import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import ManageProduct from './pages/ManageProduct'
import ManageCategory from './pages/ManageCategory'
import Admin from './pages/Admin'
import Home from './pages/Home';
import Tour from './pages/Tour';
import Attraction from './pages/Attraction';
import Register from './component/Register';
import Login from './component/Login';
import ManageDescription from './pages/ManageDescription';
import PackageDetails from './pages/PackageDetails';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
        {/* path user */}
       <Route path='/' component={Home} exact />
       <Route path='/tourdomestik' component={Tour} />
       <Route path='/tiketatraksi' component={Attraction} />
       <Route path='/package-details' component={PackageDetails} />


       {/* path admin */}
       <Route path='/manageproduct' component={ManageProduct} />
       <Route path='/managecategory' component={ManageCategory} />
       <Route path='/managedescription' component={ManageDescription} />
       <Route path='/admin' component={Admin} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
      </div>
     );
  }
}
 
export default App;
