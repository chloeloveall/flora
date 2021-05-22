import styled from 'styled-components';
import LandingImg from '../../../img/flora-landing.svg';

export const LandingBackground = styled.div`
  background-image: url(${LandingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  top: 50%;
  text-align: center;
`;