import React from 'react';
// import styled from 'styled-components';
// import MainImg from '../../img/main-abstract-copy.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ZoomedAnimation from './ZoomedAnimation';
import Header from '../Header/Header';

// const Background = styled.div`
// background-image: url(${MainImg});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   min-height: 100vh;
// `;

const Home = () => {
  return (
    <>
    <Header />
    {/* <ZoomedAnimation /> */}
    {/* <Background></Background> */}
      {/* <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} style={{ zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
          <p>Scroll down</p>
          <ZoomedAnimation />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer horizontal offset={1} speed={20} style={{ zIndex: 2, backgroundColor: '#000000' }}>
          <p>Some text will go here...</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax> */}
    </>
  );
}

export default Home;