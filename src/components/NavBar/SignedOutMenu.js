import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { openModal } from '../../actions/index';

export default function SignedOutMenu() {
  const dispatch = useDispatch();

  return (
    <Menu.Item position='right'>
      <Button.Group>
        <Button
          onClick={() => dispatch(openModal({modalType: 'LoginForm'}))}
          content='Login' />
        <Button.Or />
        <Button
          onClick={() => dispatch(openModal({modalType: 'RegisterForm'}))}
          content='Register' />
      </Button.Group>
    </Menu.Item>
  )
}