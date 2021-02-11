import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000000;
  color: #000000;
  margin: 0.5em 0;
  padding: .7em 1.9em;
  cursor: pointer;

  &:hover {
    background: red;
    border-color: red;
  }

  & + button {
    margin-left: 10px;
  }

  ${props => props.primary && css`
    background: #000000;
    color: white;
  `}
`;

export default Button;