import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000000;
  color: #000000;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #000000;
    color: white;
  `}
`;

export default Button;