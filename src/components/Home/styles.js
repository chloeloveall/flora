import styled from 'styled-components';
import LandingImg from '../../img/flora-landing.svg';

export const BodyStyles = styled.div`
  font-size: 18px;
  line-height: 1.3;
  color: #000000;
  padding-top: 95px;
  ${'' /* text-align: justify;
  text-justify: inter-word; */}
`;

export const LandingBackground = styled.div`
  background-image: url(${LandingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  top: 50%;
  text-align: center;
`;