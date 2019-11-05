/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import L from 'components/L';

import styled from 'styled-components';

const StyledButton = styled.button`
  ${props => props.theme.typography.button}
  ${props => props.upper ? 'text-transform: uppercase;' : ''}
  ${props => props.size === 'short' ? props.theme.mixins.p([1, 4]) : props.theme.mixins.p([1.5, 4])}
  ${props => props.fluid ? `width: 100%;` : ''}
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  background: ${props => props.outlined ? 'transparent' : props.theme.color[props.color].main};
  border: 2px solid ${props => props.theme.color[props.color].main};
  color: ${props => props.outlined ? props.theme.color[props.color].main : props.theme.color[props.color].text};
  transition: ${props => props.theme.state.transition.main};

  &:hover, &:active {
    background: ${props => props.outlined ? props.theme.color[props.color].main : 'transparent'};
    color: ${props => props.outlined ? props.theme.color[props.color].text : props.theme.color[props.color].main};
  }
`;

function Button(props) {
  return (
    <L display="flex" jc={props.jc}>
      <StyledButton onClick={props.handleRoute} {...props}>
        {Children.toArray(props.children)}
      </StyledButton>
    </L>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  fluid: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func,
  jc: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  outlined: false,
  size: 'short',
};

export default Button;
