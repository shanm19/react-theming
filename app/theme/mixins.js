import globals from './globals';
import breakpoints from './breakpoints';
// import state from './state';

const mixins = {
  // Generates CSS for all CSS props on component, even allowing responsive settings
  runCSSFuncs: (props, cssFuncs) => {
    let css = '';
    let tempProps = props;
    for (let propName in tempProps) {
      if (cssFuncs.hasOwnProperty(propName) && typeof tempProps[propName] !== 'object') {
        tempProps[propName] = { xx: tempProps[propName] };
      }
    }
    for (let bp in props.theme.breakpoints) {
      for (let propName in tempProps) {
        if (cssFuncs.hasOwnProperty(propName) && tempProps[propName][bp]) {
          css += tempProps.theme.mixins.mq(cssFuncs[propName](tempProps[propName][bp], tempProps.theme), bp);
        }
      }
    }
    return css;
  },
  // Breakpoints
  mq: (styles, min = false, max = false) => {
    const minWidth = min ? `(min-width: ${breakpoints[min]}px)` : '';
    const maxWidth = max ? `(max-width: ${breakpoints[max] - 1}px)` : '';
    if (min === 'xx' && !max) return styles;
    return `
      @media ${minWidth} ${min && max ? ' and ' : ''} ${maxWidth} { ${styles} }
    `;
  },
  ifTouch: (props = {}) => 'ontouchstart' in document.documentElement ? props : {},
  // Layout
  bg: (
    backgroundSize = 'cover',
    backgroundPosition = 'center',
    backgroundColor = '',
  ) => ({
    backgroundSize,
    backgroundPosition,
    backgroundColor,
    backgroundRepeat: 'no-repeat',
  }),
  spacing: factor => factor * globals.spaceBase,
  pX: spacing => `
    padding-left: ${mixins.spacing(spacing)}px;
    padding-right: ${mixins.spacing(spacing)}px;
  `,
  pY: spacing => `
    padding-top: ${mixins.spacing(spacing)}px;
    padding-bottom: ${mixins.spacing(spacing)}px;
  `,
  p: (spacing = []) => ({
    padding: spacing.map(space => `${mixins.spacing(space)}px`).join(' '),
  }),
  mX: spacing => `
    margin-left: ${mixins.spacing(spacing)}px;
    margin-right: ${mixins.spacing(spacing)}px;
  `,
  mY: spacing => `
    margin-top: ${mixins.spacing(spacing)}px;
    margin-bottom: ${mixins.spacing(spacing)}px;
  `,
  m: (spacing = []) => ({
    margin: spacing.map(space => `${mixins.spacing(space)}px`).join(' '),
  }),
  gridColumns: (spacing = 0, inline = false, gridFlow = 'column') => ({
    display: inline ? 'inline-grid' : 'grid',
    gridAutoFlow: gridFlow === 'column' ? gridFlow : 'initial',
    gridTemplateColumns: gridFlow !== 'column' ? gridFlow : 'initial',
    gap: `${mixins.spacing(spacing)}px`,
  }),
  gridRows: (spacing = 0, inline = false, gridFlow = 'row') => ({
    display: inline ? 'inline-grid' : 'grid',
    gridAutoFlow: gridFlow === 'row' ? gridFlow : 'initial',
    gridTemplateRows: gridFlow !== 'row' ? gridFlow : 'initial',
    gap: `${mixins.spacing(spacing)}px`,
  }),
  flexRow: (inline = false) => ({
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: 'row',
  }),
  flexColumn: (inline = false) => ({
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: 'column',
  }),
  square: dimension => ({
    height: dimension,
    width: dimension,
  }),
  circle: dimension => ({
    height: dimension,
    width: dimension,
    borderRadius: '50%',
  }),
  // State
  setTransition: (
    transitions = [],
    time = timing.main,
    delay = 0,
    ease = easing.main,
  ) =>
    transitions
      .map(transition => `${transition} ${time} ${delay} ${ease}`)
      .join(', '),
};

export default mixins;
