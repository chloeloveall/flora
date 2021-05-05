import React, { useState } from "react";
import firebase from "firebase/app";
import styled from 'styled-components';
import '../../index.css';
import { signInWithGoogle } from "../../firebase";
import { signInWithGithub } from "../../firebase";
import { signInWithTwitter } from "../../firebase";
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import LoginImg from '../../img/Asset2.png';

const BodyStyles = styled.body`
  font-family: 'Montserrat', sans-serif;
  background: #f5ead8;
  background-image: url(${LoginImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Heading1 = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const Span = styled.span`
  font-size: 12px;
`;

const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #617057;
  background: #617057;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }
`;

const Footer = styled.div`
	margin-top: 25px;
	text-align: center;
`;

function Copyright() {
  return (
    <Paragraph>
      {'Copyright © '}
      <Anchor href="https://github.com/chloeloveall">
        Chloe Loveall
      </Anchor>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Paragraph>
  );
}

const Login = () => {
  const [isActive, setActive] = useState(false);

  const completeRegistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Successful user registration");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const completeLogin = (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <BodyStyles>
        <div className={`login-container${isActive ? " right-panel-active" : ""}`} id="login-container">
          <div className="login-form-container sign-up-container">
            <form onSubmit={completeRegistration}>
              <Heading1>Create Account</Heading1>
              <div className="login-social-container">
                <Icon 
                  circular 
                  name='google' 
                  size='big'
                  onClick={() => {
                    signInWithGoogle();
                  }}
                />
                <Icon 
                  circular 
                  name='github' 
                  size='big'
                  onClick={() => {
                    signInWithGithub();
                  }}
                />
                <Icon 
                  circular 
                  name='twitter' 
                  size='big'
                  onClick={() => {
                    signInWithTwitter();
                  }}
                />
              </div>
              <Span>or use your email</Span>
              <input
                type='text'
                name='email'
                placeholder='email' />
              <input
                type='password'
                name='password'
                placeholder='Password' />
              <Button type='submit'>Sign Up</Button>
            </form>
          </div>

          <div className="login-form-container sign-in-container">
            <form onSubmit={completeLogin}>
              <Heading1>Sign In</Heading1>
              <div className="login-social-container">
                <Icon 
                  circular 
                  name='google' 
                  size='big'
                  onClick={() => {
                    signInWithGoogle();
                  }}
                />
                <Icon 
                  circular 
                  name='github' 
                  size='big'
                  onClick={() => {
                    signInWithGithub();
                  }}
                />
                <Icon 
                  circular 
                  name='twitter' 
                  size='big'
                  onClick={() => {
                    signInWithTwitter();
                  }}
                />
              </div>
              <Span>or use your account</Span>
              <input
                type='text'
                name='loginEmail'
                placeholder='email' />
              <input
                type='password'
                name='loginPassword'
                placeholder='Password' />
              <Anchor href="#">Forgot your password?</Anchor>
              <Button type='submit'>Sign In</Button>
            </form>
          </div>

          <div className="login-overlay-container" >
            <div className="login-overlay" >
              <div className="login-overlay-panel login-overlay-left">
                <Heading1>Welcome Back!</Heading1>
                <Paragraph>To keep connected with us please login with your personal info</Paragraph>
                <Button className="login-ghost" id="signIn" onClick={handleToggle}>Sign In</Button>
              </div>
              <div className="login-overlay-panel login-overlay-right">
                <Heading1>Hello, Friend!</Heading1>
                <Paragraph>Create an account to start your personal plant journey with us</Paragraph>
                <Button className="login-ghost" id="signUp" onClick={handleToggle}>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>

        <Footer>
          <Link to='/'><Paragraph>Cancel</Paragraph></Link>
          <Copyright />
        </Footer>
      </BodyStyles>
    </>
  );
}

export default Login;