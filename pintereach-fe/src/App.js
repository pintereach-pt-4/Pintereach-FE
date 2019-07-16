// import React from 'react';
// import Boards from './components/Boards';
// import { BrowserRouter as Router, Route, } from "react-router-dom";

// import './css/App.css';


// // import Nav from './components/Nav';
// // import SignIn from "./components/SignIn";
// // import Register from './components/Register';
// // 
// // import About from './components/About';
// // import Home from './components/Home';
// // import Footer from './components/Footer';


// class App extends React.Component {
//   render(){
//     return (
//       <Router>
//         <Route path ='/boards' component={Boards} />
//         {/* <Route path ="/" component={Nav} />
//         <Route exact path="/" component={Home} />
//         <Route path ='/signin' component={SignIn} />
//         <Route path ='/register' component={Register} />
       
//         <Route path ='/about' component={About} />
//         <Route path="/" component={Footer} /> */}
//       </Router>
//     )
//   }
// }
// export default App;








import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Boards from "./components/Boards";


class App extends React.Component {
  render() {
    return (
     <>
     <Router>
    <Route path='/boards' component={Boards}></Route>
     </Router>
     </>
    );
  }
}
export default App;