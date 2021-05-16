import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PlantList from './PlantList';

const PlantDashboard = () => {
  const {plants} = useSelector(state => state.plant);

  return (
    <Grid>
      <Grid.Column width={10}>
        <PlantList 
          plants={plants} 
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Plant Notes Section/Filtering</h2>
      </Grid.Column>
    </Grid>
  )
}

export default PlantDashboard;