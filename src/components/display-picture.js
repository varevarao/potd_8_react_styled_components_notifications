import styled, { css } from 'styled-components';

export const DisplayPicture = styled.div`
  @media (max-width: 767px) {
    width: 2rem;
    padding-top: 2rem;
  }
  
  @media (min-width: 768px) {
    width: 25%;
    padding-top: 25%;
  }

  clip-path: circle(50%);

  ${props => props.image && css`
    background-image: url(${props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`;