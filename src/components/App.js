import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import LandingPage from './Home/LandingPage/LandingPage';
import HomePage from './Home/HomePage/HomePage';
import AboutFlora from './Home/AboutFlora/AboutFlora';
import Blog from './Blog/Blog';
import Nav from './NavBar/Nav/Nav';
import PlantDashboard from './PlantDashboard/PlantDashboard';
import PlantDetailedPage from './PlantDetailedPage/PlantDetailedPage';
import PlantForm from '../components/PlantForm/PlantForm';
import ModalManager from './Reusable/Modals/ModalManager';
import { ToastContainer } from 'react-toastify';
import ErrorComponent from './Reusable/Errors/ErrorComponent';
import AccountPage from './Auth/AccountPage';
import { useSelector } from 'react-redux';
import LoadingComponent from './Reusable/Loading/LoadingComponent';
import ProfilePage from './Profiles/ProfilePage';

export default function App() {
  // this clears to new event form without old data
  const {key} = useLocation();
  const {initialized} = useSelector((state) => state.async);

  // prevents the application from loading until the initilized flag is set to true
  if (!initialized) return <LoadingComponent content='Loading Flora...' />

  return (
    <>
      <ModalManager />
      <ToastContainer
        position='bottom-right'
        hideProgressBar
      />
        <Route exact path='/' component={LandingPage} />

      <Route path={'/(.+)'} render={() => (
        <>
          <Nav />
          <Route exact path='/home' component={HomePage} />
          <Route path='/about' component={AboutFlora} />
          <Route path='/blog' component={Blog} />
          <Route exact path='/plants' component={PlantDashboard} />
          <Route path='/plants/:id' component={PlantDetailedPage} />
          <Route path={['/createPlant', '/manage/:id']} component={PlantForm} key={key} />
          <Route path='/profile/:id' component={ProfilePage} />
          <Route path='/account' component={AccountPage} />
          <Route path='/error' component={ErrorComponent} />
        </>
      )} />
    </>
  )
}