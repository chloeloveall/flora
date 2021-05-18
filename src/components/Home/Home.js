import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import LandingImg from '../../img/flora-landing.svg';
import PropTypes from 'prop-types';

const LandingBackground = {
  // backgroundImage: 'linear-gradient(135deg, rgb(61, 70, 69) 0%, rgb(105, 119, 83) 69%, rgb(157, 171, 135) 89%)',
  // backgroundImage: 'radial-gradient(circle, rgba(173,186,152,1) 0%, rgba(49,68,40,1) 100%)',
  backgroundImage: `url(${LandingImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  top: '50%',
}

const Centered = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

function Home(props) {
  return (
    <div>
      <Segment style={LandingBackground} textAlign='center' vertical>
        <Container style={Centered}>
          <Header as='h1'>
            <Icon name='leaf' />
            Flora: A Botanical Companion
          </Header>
          <Button color='black' onClick={() => props.history.push('/plants')} >
            Enter
            <Icon name='right arrow' inverted/>
          </Button>
        </Container>
      </Segment>
    </div>
  )
}

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;

