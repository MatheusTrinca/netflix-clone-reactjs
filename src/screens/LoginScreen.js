import React from 'react';
import logomarca from '../images/logo.png';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logomarca} alt="logo" />
        <button className="loginScreen__button">Sign in</button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        <>
          <h1>Unlimited filmes, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>
        </>
        <div className="loginScreen__form">
          <input type="text" placeholder="Email Address" />
          <button className="loginScreen__submit">GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

// Continua no 58:00 -> criar o state
