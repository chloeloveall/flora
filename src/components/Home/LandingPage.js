import React from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import FloraLogo from '../../img/flora-logo.png';
import { LandingBackground } from './styles';
import styles from './LandingPage.module.css';

function LandingPage(props) {
  return (
    <LandingBackground>
      <Segment vertical> 
        <Card className={styles.centeredLanding}>
          <Card.Img variant='top' src={FloraLogo} className={styles.logoImageLanding} />
          <Card.Body>
            <Card.Title className={styles.cardTitleLanding}>A Botanical Companion</Card.Title>
            <Button onClick={() => props.history.push('/home')}>
              Enter
              <Icon name='chevron right'/>
            </Button>
          </Card.Body>
        </Card>
      </Segment>
    </LandingBackground>
  )
}

LandingPage.propTypes = {
  history: PropTypes.object,
};

export default LandingPage;

