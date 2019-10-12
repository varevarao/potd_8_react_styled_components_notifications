import styled, { css } from 'styled-components';

export const DisplayPicture = styled.div`
  width: 3rem;
  padding-top: 3rem;

  clip-path: circle(50%);

  ${props => props.image && css`
    background-image: url(${props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`;