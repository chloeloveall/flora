import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Form, Icon, Input } from 'semantic-ui-react';
import { WeatherDiv, WeatherSubDiv, WeatherFooter, WeatherIcon } from './styles';

export default function Forecast() {
  const [city, setcity] = useState();

  const [search, setsearch] = useState('Bellevue, Washington');
  const Event = (event) => {
    setsearch(event.target.value);
  };
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=${process.env.REACT_APP_FORECAST_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setcity(data.main);
    };
    fetchAPI();
  }, [search]);

  return (
    <Paper>
      <WeatherDiv>
        <Form>
          <Input
            type='search'
            placeholder='Search for a city'
            onChange={Event}
            value={search}
            icon='search'
            fluid
          />
        </Form>

        {!city ? (
          <WeatherSubDiv>
            <p> No Data found</p>
          </WeatherSubDiv>
        ) : (
          <WeatherSubDiv>
            <h2>Current Temp</h2>
            <p>{city.temp} °F </p>
            <p>
              Low {city.temp_min} °F | High {city.temp_max} °F
            </p>
          </WeatherSubDiv>
        )}

        <WeatherFooter>
          <small>
            Forecast by <a href='https://openweathermap.org/'>Open Weather</a>
            <WeatherIcon>
              <Icon name='cloud'/>
            </WeatherIcon>
          </small>
        </WeatherFooter>
      </WeatherDiv>
    </Paper>
  );
}