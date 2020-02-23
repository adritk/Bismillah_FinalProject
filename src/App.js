import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import ManageProduct from './pages/ManageProduct'
import ManageCategory from './pages/ManageCategory'
import Admin from './pages/Admin'
import Home from './pages/Home';
import Tour from './pages/Tour';
import Register from './component/Register';
import Login from './component/Login';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
       <Route path='/' component={Home} exact />
       <Route path='/manageproduct' component={ManageProduct} />
       <Route path='/managecategory' component={ManageCategory} />
       <Route path='/admin' component={Admin} />
       <Route path='/tourdomestik' component={Tour} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
      </div>
     );
  }
}
 
export default App;
