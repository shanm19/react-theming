import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { text as textColors } from 'theme/color';
import typography, { fontFamilies } from 'theme/typography';

// Functions that generate CSS for typography properties
export const cssFuncs = {
  family: (family, theme) => `font-family: ${fontFamilies[family]};`,
  variant: (variant, theme) => `
    font-size: ${theme.typography[variant].fontSize}px;
    line-height: ${theme.typography[variant].lineHeight};
    font-weight: ${theme.typography[variant].fontWeight};
    letter-spacing: ${theme.typography[variant].letterSpacing}px;
    text-transform: ${theme.typography[variant].textTransform};
  `,
  upper: (upper, theme) => upper && `text-transform: uppercase;`,
  color: (color, theme) => `color: ${theme.color.text[color]};`,
  maxX: (width, theme) => width ? `max-width: ${width}px;` : '',
};

const Type = props => {
  const { variant, messages, children } = props;
  const T = styled[typography[variant].el]`${props => props.theme.mixins.runCSSFuncs(props, cssFuncs)}`;
  return (
    <T {...props}>
      {messages ? <FormattedMessage {...messages} /> : Children.toArray(children)}
    </T>
  ); 
}

Type.propTypes = {
  variant: PropTypes.oneOf(Object.keys(typography)),
  family: PropTypes.oneOf(Object.keys(fontFamilies)),
  upper: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(textColors)),
  maxX: PropTypes.number,
  children: PropTypes.node,
  messages: PropTypes.object,
};

Type.defaultProps = {
  variant: 'inherit',
  family: 'primary',
};

export default Type;
