import styled from 'styled-components';
import LoginImg from '../../img/Asset2.png';

export const BodyStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #f5ead8;
  background-image: url(${LoginImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Heading1 = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #617057;
  background: #617057;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }
`;

export const Footer = styled.div`
	margin-top: 25px;
	text-align: center;
`;