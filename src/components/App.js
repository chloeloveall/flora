import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './NavBar/Nav';
import PlantDashboard from './PlantDashboard';
import PlantDetailedPage from './PlantDetailedPage/PlantDetailedPage';
import PlantForm from './PlantForm';

const App = () => {
  return (
    <>
      <Route exact path ='/' component={Home} />

      <Route path={'/(.+)'} render={() => (
        <>
          <Nav />
          <Route exact path='/plants' component={PlantDashboard} />
          <Route path='/plants/:id' component={PlantDetailedPage} />
          <Route path={['/createPlant', '/manage/:id']} component={PlantForm} />
        </>
      )} />
    </>
  )
}

export default App;