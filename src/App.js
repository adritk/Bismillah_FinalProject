import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
// import NavbarPage from './component/Navbar';
import Login from './component/Login';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Register from './component/Register';


class App extends Component {
  
  render() { 
    return ( 
      <div className="App">

       <Route path='/' component={Home} exact />
       <Route path='/paket-tour' component={Tour} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
       {/* <Route path='/travelling' component={Register} />
       <Route path='/attraction' component={Register} /> */}
      </div>
     );
  }
}
 
export default App;
