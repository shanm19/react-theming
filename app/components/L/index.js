import styled from 'styled-components';

// Functions that generate CSS for layout properties
export const cssFuncs = {
  container: (container, theme) => `
    width: 100%;
    max-width: 100%;
    ${theme.mixins.pX(1.5)}
    margin: auto;
    ${theme.mixins.mq(`max-width: ${theme.breakpoints.sm}px;`, 'sm')}
    ${theme.mixins.mq(`max-width: ${theme.breakpoints.md}px;`, 'md')}
    ${theme.mixins.mq(`max-width: ${theme.breakpoints.lg}px;`, 'lg')}
    ${theme.mixins.mq(`max-width: ${theme.breakpoints.xl}px;`, 'xl')}
  `,
  textAlign: (textAlign, theme) => textAlign === 'center' ? 'text-align: center;' : textAlign === 'left' ? 'text-align: left;' : '',
  display: (display, theme) => `display: ${display};`,
  gap: (gap, theme) => gap ? `grid-gap: ${theme.mixins.spacing(gap)}px;` : '',
  jc: (jc, theme) => jc ? `justify-content: ${jc};` : '',
  ji: (ji, theme) => ji ? `justify-items: ${ji};` : '',
  js: (js, theme) => js ? `justify-self: ${js};` : '',
  ac: (ac, theme) => ac ? `align-content: ${ac};` : '',
  ai: (ai, theme) => ai ? `align-items: ${ai};` : '',
  as: (alignSelf, theme) => alignSelf ? `align-self: ${alignSelf};` : '',
  flow: (flow, theme) => flow ? `flex-direction: ${flow}; grid-auto-flow: ${flow};` : '',
  rowContent: (content, theme) => content ? `grid-template-rows: ${content}-content;` : '',
  columnContent: (content, theme) => content ? `grid-template-columns: ${content}-content;` : '',
  columns: (columns, theme) => columns ? `grid-template-columns: repeat(${columns}, 1fr);` : '',
  grow: (grow, theme) => grow ? `flex-grow: 1; height: 100%; width: 100%;` : '',
  bgColor: (bgColor, theme) => bgColor ? `background-color: ${theme.color.background[bgColor].main}; color: ${theme.color.background[bgColor].text};` : '',
  bgGradient: (bgGradient, theme) => bgGradient ? `background: ${theme.color.gradients[bgGradient].main}; color: ${theme.color.gradients[bgGradient].text};` : '',
  z: (z, theme) => z ? `z-index: ${theme.zIndex[z]};` : '',
  position: (position, theme) => position ? `position: ${position};` : '',
  width: (width, theme) => width ? `width: ${width};` : 'width: 100%;',
  minY: (height, theme) => height ? `min-height: ${height}px;` : '',
  pY: (padding, theme) => padding ? theme.mixins.pY(padding) : '',
  pX: (padding, theme) => padding ? theme.mixins.pX(padding) : '',
};

const L = styled.div`${props => props.theme.mixins.runCSSFuncs(props, cssFuncs)}`;

export default L;
