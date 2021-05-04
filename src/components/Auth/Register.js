import React from "react";
import firebase from "firebase/app";

const Register = () => {

  function completeRegistration(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("Successful user registration");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={completeRegistration}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register;