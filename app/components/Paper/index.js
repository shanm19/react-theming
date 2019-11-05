/**
 *
 * Paper.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPaper = styled.div`
  background-color: ${props => props.theme.color.background.paper.main};
  color: ${props => props.theme.color.background.paper.text};
  ${props => props.p ? props.theme.mixins.p([props.p]) : ''}
  ${props => props.pX ? props.theme.mixins.pX(props.pX) : ''}
  ${props => props.pY ? props.theme.mixins.pY(props.pY) : ''}
  ${props => props.round ? `border-radius: ${props.theme.globals.borderRadius.main}px;` : ''}
  box-shadow: ${props => props.depth ? props.theme.elevation[props.depth * 100] : 'none'};
  ${props => props.depthHover ? 'cursor: pointer;' : ''}
  transition: ${props => props.theme.state.transition.main};

  &:hover, &:active {
    box-shadow: ${props => props.depthHover ? props.theme.elevation[props.depthHover * 100] : 'none'};
  }
`;

function Paper(props) {
  return (
    <StyledPaper {...props}>
      {Children.toArray(props.children)}
    </StyledPaper>
  );
}

Paper.propTypes = {
  border: PropTypes.bool,
  depth: PropTypes.number,
  depthHover: PropTypes.number,
  p: PropTypes.number,
  pX: PropTypes.number,
  pY: PropTypes.number,
  round: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Paper.defaultProps = {

};

export default Paper;
