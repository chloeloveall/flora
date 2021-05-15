import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Gradient = {
  // backgroundImage: 'linear-gradient(135deg, rgb(61, 70, 69) 0%, rgb(105, 119, 83) 69%, rgb(157, 171, 135) 89%)',
  backgroundImage: 'radial-gradient(circle, rgba(173,186,152,1) 0%, rgba(49,68,40,1) 100%)',
  height: '100vh',
  paddingTop: '75px'
}
const Home = ({history}) => {
  return (
    <>
      <Segment style={Gradient} inverted textAlign='center' vertical>
        <Container>
          <Header as='h1' inverted>
            <Icon name='leaf' />
            Flora: A Botanical Companion
          </Header>
          <Button onClick={() => history.push('/plants')} inverted >
            Get Started
            <Icon name='right arrow' inverted/>
          </Button>
        </Container>
      </Segment>
    </>
  )
}

export default Home;

