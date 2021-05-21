import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { socialLogin } from '../../firebase-firestore/firebaseService';
import { closeModal } from '../../actions/index';
import { ErrorsAndButtonMargin } from './styles';

export default function SocialLogin() {
  const dispatch = useDispatch();

  function handleSocialLogin(provider) {
    dispatch(closeModal());
    socialLogin(provider);
  }
  
  return (
    <>
      <ErrorsAndButtonMargin>
        <Button 
          icon='facebook' 
          onClick={() => handleSocialLogin('facebook')}
          fluid 
          basic
          content='Login with Facebook'/>
      </ErrorsAndButtonMargin>
      <ErrorsAndButtonMargin>
        <Button 
          icon='google' 
          onClick={() => handleSocialLogin('google')}
          fluid 
          basic
          content='Login with Google'/>
      </ErrorsAndButtonMargin>
      <ErrorsAndButtonMargin>
        <Button 
        icon='twitter' 
        onClick={() => handleSocialLogin('twitter')}
        fluid 
        basic
        content='Login with Twitter'/>
      </ErrorsAndButtonMargin>
      <ErrorsAndButtonMargin>
        <Button 
        icon='github' 
        onClick={() => handleSocialLogin('github')}
        fluid 
        basic
        content='Login with GitHub'/>
      </ErrorsAndButtonMargin>
    </>
  )
}