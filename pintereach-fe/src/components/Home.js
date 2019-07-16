import React from 'react';

import '../css/home.css';
import '../css/bootstrap.min.css';

const Home = () => {
    return (
      <div className="container">
        <h1>Pintereach</h1>
        <p>
          As a researcher, it's difficult to keep track of articles you want
          to read later. Pintereach helps you research by enabling you to
          save and organize articles in to categories to read later.
        </p>
        <div className="container-fluid" id="middle">
        
        </div>
        <p className="home-p">Pintereach is easy to use. Just three simple steps:</p>
        <ol>
          <li>Sign up</li>
          <li>Create and name board</li>
          <li>Post article title or links to board</li>
        </ol>
        <div className="home-btn">
          <button type="submit" className="btn btn-dark">
            <a href="./Register">Sign up</a>
          </button>
          <button type="submit" className="btn btn-dark btn-home">
            <a href="./SignIn">Sign in</a>
          </button>
        </div>
      </div>
    );
}

export default Home;