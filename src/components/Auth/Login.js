import React, { useState } from "react";
import firebase from "firebase/app";
import '../../index.css';
import { signInWithGoogle } from "../../firebase";
import { signInWithGithub } from "../../firebase";
import { signInWithTwitter } from "../../firebase";
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { BodyStyles, Heading1, Paragraph, Span, Anchor, Button, Footer } from './styles';

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