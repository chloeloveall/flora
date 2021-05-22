import styled from 'styled-components';

export const BodyStyles = styled.div`
  font-size: 18px;
  line-height: 1.3;
  color: #000000;
  padding-top: 95px;
  ${'' /* text-align: justify;
  text-justify: inter-word; */}
`;

export const WidthDiv = styled.div`
  margin: 1rem;
  @media (min-width: 1170px) {
      max-width: 1170px;
      margin: 1rem auto;
  }
`;