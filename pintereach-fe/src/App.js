import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <h1>Pintereach</h1>
      <Route path="/" component={Nav} />
      </Router>
    )
  }
}
export default App;
