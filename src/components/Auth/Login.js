import React from "react";
import firebase from "firebase/app";

const Login = () => {

  function completeLogin(event) {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={completeLogin}>
        <input
          type='text'
          name='loginEmail'
          placeholder='email' />
        <input
          type='password'
          name='loginPassword'
          placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
}

export default Login;