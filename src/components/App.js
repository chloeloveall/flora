import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './NavBar/Nav';
import PlantDashboard from './PlantDashboard/PlantDashboard';
import PlantDetailedPage from './PlantDetailedPage/PlantDetailedPage';
import PlantForm from '../components/PlantForm/PlantForm';

const App = () => {
  // this clears to new event form without old data
  const {key} = useLocation();

  return (
    <>
      <Route exact path ='/' component={Home} />

      <Route path={'/(.+)'} render={() => (
        <>
          <Nav />
          <Route exact path='/plants' component={PlantDashboard} />
          <Route path='/plants/:id' component={PlantDetailedPage} />
          <Route path={['/createPlant', '/manage/:id']} component={PlantForm} key={key} />
        </>
      )} />
    </>
  )
}

export default App;