import React from 'react';


const Home = () => {
    return (
      <div className="container">
        <h1>Pintereach</h1>
        <p>
          As a researcher, it's difficult to keep track of articles you want
          to read later. Pintereach helps you research by enabling you to
          save and organize articles in to categories to read later.
        </p>
        <p>Pintereach is easy to use. Just three simple steps:</p>
        <ol>
          <li>Sign up</li>
          <li>Create and name board</li>
          <li>Post article title or links to board</li>
        </ol>
        <div>
          <button>
            <a href="./Register">Sign up</a>
          </button>
          <button>
            <a href="./SignIn">Sign in</a>
          </button>
        </div>
      </div>
    );
}

export default Home;