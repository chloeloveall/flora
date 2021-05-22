import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import SignedInMenu from '../SignedInMenu';
import SignedOutMenu from '../SignedOutMenu';
import AppBar from '@material-ui/core/AppBar';
import LogoImg from '../../../img/flora-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Nav.module.css';

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: '#F4ECE1', 
    boxShadow: 'none', 
    height: '75px'
  },
});

export default function Nav() {
  const {authenticated} = useSelector(state => state.auth);
  const classes = useStyles();

  return (
    <AppBar className={classes.appBarStyle}>
      <Menu fixed='top' style={{height: '75px'}} className='ui secondary menu'>
        <img src={LogoImg} className={styles.navLogo}/>
          <Menu.Item header floated='left'>
            <Dropdown pointing='top left' text='Menu' className={styles.dropdownFont}>
              <Dropdown.Menu>
                <Dropdown.Item text='Flora Home' as={Link} to='/home' icon='plus' />
                <Dropdown.Item text='About' as={Link} to='/about' icon='settings' />
                <Dropdown.Item text='Blog' as={Link} to='/blog' icon='user' />
                {authenticated ? (
                  <Dropdown.Item as={NavLink} to='/plants' text='Dashboard' icon='dashboard' name='Plant Dashboard'></Dropdown.Item>
                ) : (
                  console.log('user is not signed in')
                )}
                {authenticated &&
                  <Dropdown.Item as={Link} to='/createPlant' text='Create Plant' icon='plus' />
                }
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu />
          ) : (
            <SignedOutMenu />
          )}
      </Menu>
    </AppBar>
  );
}