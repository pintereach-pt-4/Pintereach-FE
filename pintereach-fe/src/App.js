import React from 'react';
import {Route } from 'react-router-dom';

import Nav from './components/Nav';
import SignIn from "./components/SignIn";
import Register from './components/Register';
import Boards from './components/Boards';
import About from './components/About';
import Home from './components/Home';
import './css/App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Route path ="/" component={Nav} />
        <Route path="/home" component={Home} />
        <Route path ='/signin' component={SignIn} />
        <Route path ='/register' component={Register} />
        <Route path ='/boards' component={Boards} />
        <Route path ='/about' component={About} />
      </div>
    )
  }
}
export default App;
