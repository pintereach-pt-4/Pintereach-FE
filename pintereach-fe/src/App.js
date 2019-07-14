import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import SignIn from './components/SignIn';
import './css/App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={Nav} />
        <h1>Pintereach</h1>
        <p></p>
        <Route path="" component={SignIn}/>
      </Router>
    )
  }
}
export default App;
