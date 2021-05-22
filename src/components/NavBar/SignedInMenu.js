import React from 'react';
import { Image, Menu, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserImg from '../../img/user.png';
import { toast } from 'react-toastify';
import { signOutFirebase } from '../../firebase-firestore/firebaseService';
import LoadingComponent from '../Reusable/Loading/LoadingComponent'

export default function SignedInMenu() {
  const {currentUserProfile} = useSelector((state) => state.profile);
  const history = useHistory();
  const {loading, error} = useSelector((state) => state.async);

  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }

  if ((loading && !currentUserProfile) || (!currentUserProfile && !error)) return <LoadingComponent content='Loading Profile Information...' />

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUserProfile.photoURL || `${UserImg}`} />
      <Dropdown pointing='top right' text={currentUserProfile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createPlant' text='Create Plant' icon='plus' />
          <Dropdown.Item as={Link} to={`/profile/${currentUserProfile.id}`} text='Profile' icon='user' />
          <Dropdown.Item text='My Account' as={Link} to='/account' icon='settings' />
          <Dropdown.Item 
            onClick={handleSignOut} 
            text='Sign Out' 
            icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}