export const neutral = {
  // White
  100: '#FFFFFF',
  // Light Gray
  200: '#DDE2E8',
  300: '#ccc',
  // Gray
  400: '#B3BCC5',
  500: '#888',
  // Dark Gray
  600: '#778F9B',
  700: '#444',
  800: '#222',
  // Charcoal
  900: '#1F2D3D',
};

export const palette = {
  primary: {
    // Salmon
    a: {
      500: '#EB6961',
    },
    // Plum
    b: {
      500: '#620D3E',
    },
  },
  secondary: {
    // Picotee
    a: {
      500: '#2E2A52',
    },
    // Uranian Blue
    b: {
      500: '#DAF3F5',
    },
    // Cantaloupe
    c: {
      500: '#F4CD84',
    },
  },
};

export const text = {
  main: neutral[800],
  light: neutral[500],
  inverse: neutral[100],
  primary: palette.primary.a[500],
  secondary: palette.secondary.a[500],
};

export const primary = {
  main: palette.primary.a[500],
  text: text.inverse,
};

export const secondary = {
  main: palette.secondary.a[500],
  text: text.inverse,
};

export const status = {
  active: '#2D8EFF',
  success: '#13CE66',
  error: '#FF4949',
  warning: '#FFCC3D',
  disabled: neutral[500],
};

export const background = {
  primary: {
    main: palette.primary.a[500],
    text: text.inverse,
  },
  secondary: {
    main: palette.secondary.a[500],
    text: text.inverse,
  },
  default: {
    main: neutral[300],
    text: text.main,
  },
  paper: {
    main: neutral[100],
    text: text.main,
  },
};

export const border = {
  light: neutral[100],
  main: neutral[200],
  dark: neutral[900],
  primary: neutral[200],
  primaryHover: palette.secondary.b[500],
  primaryActive: palette.primary.a[500],
  secondary: neutral[200],
  secondaryHover: palette.secondary.b[500],
  secondaryActive: palette.secondary.a[500],
  success: status.success,
  error: status.error,
  warning: status.warning,
  disabled: status.disabled,
};

export const gradients = {
  // Navi
  a: {
    main: `linear-gradient(to bottom, ${palette.primary.b[500]} 0%, ${palette.secondary.a[500]} 100%)`,
    text: text.inverse,
  },
  // Ghost
  b: {
    main: `linear-gradient(to bottom, ${palette.primary.a[500]} 0%, ${palette.primary.b[500]} 100%)`,
    text: text.inverse,
  },
  // Miami
  c: {
    main: `linear-gradient(to bottom, ${palette.secondary.b[500]} 0%, ${palette.secondary.c[500]} 100%)`,
    text: text.inverse,
  },
  // Robin Hood
  d: {
    main: `linear-gradient(to bottom, ${neutral[200]} 0%, ${neutral[500]} 100%)`,
    text: text.inverse,
  },
  // Nami
  e: {
    main: `linear-gradient(to bottom, ${palette.secondary.c[500]} 0%, ${palette.primary.a[500]} 100%)`,
    text: text.inverse,
  },
};

const color = {
  neutral,
  primary,
  secondary,
  palette,
  status,
  background,
  text,
  border,
  gradients,
};

export default color;
