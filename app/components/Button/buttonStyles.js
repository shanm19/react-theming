import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
