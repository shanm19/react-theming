// import MuliLight from 'fonts/Muli/Muli-Light.ttf';
// import MuliRegular from 'fonts/Muli/Muli-Regular.ttf';
// import MuliSemiBold from 'fonts/Muli/Muli-SemiBold.ttf';

// import PlayfairDisplayRegular from 'fonts/Playfair_Display/PlayfairDisplay-Regular.ttf';
// import PlayfairDisplayBold from 'fonts/Playfair_Display/PlayfairDisplay-Bold.ttf';

export const fontWeight = {
  thin: 100,
  light: 200,
  regular: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const fontFamilies = {
  primary: 'Muli',
  secondary: 'Playfair',
};

// export const fontFaces = [
//   // Muli
//   {
//     fontFamily: fontFamilies.primary,
//     fontStyle: 'normal',
//     fontWeight: fontWeight.light,
//     src: `url(${MuliLight})`
//   },
//   {
//     fontFamily: fontFamilies.primary,
//     fontStyle: 'normal',
//     fontWeight: fontWeight.regular,
//     src: `url(${MuliRegular})`
//   },
//   {
//     fontFamily: fontFamilies.primary,
//     fontStyle: 'normal',
//     fontWeight: fontWeight.semibold,
//     src: `url(${MuliSemiBold})`
//   },
//   // Playfair Display
//   {
//     fontFamily: fontFamilies.secondary,
//     fontStyle: 'normal',
//     fontWeight: fontWeight.regular,
//     src: `url(${PlayfairDisplayRegular})`
//   },
//   {
//     fontFamily: fontFamilies.secondary,
//     fontStyle: 'normal',
//     fontWeight: fontWeight.bold,
//     src: `url(${PlayfairDisplayBold})`
//   },
// ];

export const hero = {
  el: 'div',
  fontSize: 72,
  lineHeight: '76px',
  fontWeight: fontWeight.bold,
};
export const h1 = {
  el: 'h1',
  fontSize: 40,
  lineHeight: '53px',
  fontWeight: fontWeight.light,
};
export const h2 = {
  el: 'h2',
  fontSize: 32,
  lineHeight: '43px',
  fontWeight: fontWeight.regular,
  letterSpacing: 0.2,
};
export const h3 = {
  el: 'h3',
  fontSize: 28,
  lineHeight: '37px',
  fontWeight: fontWeight.regular,
};
export const h4 = {
  el: 'h4',
  fontSize: 24,
  lineHeight: '32px',
  fontWeight: fontWeight.semibold,
};
export const h5 = {
  el: 'h5',
  fontSize: 20,
  lineHeight: '27px',
  fontWeight: fontWeight.semibold,
  letterSpacing: 0.09,
};
export const body = {
  el: 'p',
  fontSize: 18,
  lineHeight: '24px',
  fontWeight: fontWeight.regular,
  letterSpacing: 0.09,
};
export const p = {
  el: 'p',
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: fontWeight.regular,
  letterSpacing: 0.08,
};
export const subtitle1 = {
  el: 'p',
  fontSize: 12,
  lineHeight: '15px',
};
export const button = {
  el: 'button',
  fontSize: 16,
  lineHeight: '19px',
  letterSpacing: 1.5,
  fontWeight: fontWeight.bold,
};
export const label1 = {
  el: 'p',
  fontSize: 12,
  lineHeight: '15px',
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  fontWeight: fontWeight.bold,
};
export const input = {
  el: 'div',
  fontSize: 20,
  lineHeight: '20px',
  fontWeight: fontWeight.regular,
};
export const link = {
  el: 'p',
  ...body,
  textDecoration: 'none !important',
};
export const inherit = {
  el: 'span',
};

const typography = {
  hero,
  h1,
  h2,
  h3,
  h4,
  h5,
  body,
  p,
  subtitle1,
  button,
  label1,
  input,
  link,
  inherit,
};

export default typography;
