import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import AdminPage from './pages/Admin'
import Home from './pages/Home';
import Tour from './pages/Tour';
import Register from './component/Register';
import Login from './component/Login';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
       <Route path='/' component={Home} exact />
       <Route path='/admin' component={AdminPage} />
       <Route path='/paket-tour' component={Tour} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
      </div>
     );
  }
}
 
export default App;
