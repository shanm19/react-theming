export const timing = {
  fast: '.1s',
  main: '.2s',
  slow: '.4s',
};

export const easing = {
  main: 'ease-in-out',
  in: 'ease-in',
  out: 'ease-out',
  cubicBezier: 'cubic-bezier(.71, .31, .52, .95)',
};

export const transition = {
  fast: `all ${timing.fast} ${easing.main}`,
  main: `all ${timing.main} ${easing.main}`,
  slow: `all ${timing.slow} ${easing.main}`,
};

const state = {
  hide: {
    opacity: 0,
    visibility: 'hidden',
  },
  show: {
    opacity: 1,
    visibility: 'visible',
  },
  timing,
  easing,
  transition,
};

export default state;
