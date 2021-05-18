import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { socialLogin } from '../../firebase-firestore/firebaseService';
import { closeModal } from '../../actions/index';

export default function SocialLogin() {
  const dispatch = useDispatch();

  function handleSocialLogin(provider) {
    dispatch(closeModal());
    socialLogin(provider);
  }
  return (
    <>
      <Button 
        icon='facebook' 
        onClick={() => handleSocialLogin('facebook')}
        fluid 
        color='facebook' 
        style={{marginBottom: 10}} 
        content='Login with Facebook'/>
      <Button 
        icon='google' 
        onClick={() => handleSocialLogin('google')}
        fluid 
        color='google plus' 
        style={{marginBottom: 10}} 
        content='Login with Google'/>
        <Button 
        icon='twitter' 
        onClick={() => handleSocialLogin('twitter')}
        fluid 
        color='twitter' 
        style={{marginBottom: 10}} 
        content='Login with Twitter'/>
        <Button 
        icon='github' 
        onClick={() => handleSocialLogin('github')}
        fluid 
        color='black' 
        style={{marginBottom: 10}} 
        content='Login with GitHub'/>
    </>
  )
}