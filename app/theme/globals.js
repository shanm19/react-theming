import { border as borderColor } from './color';

export const borderWidth = {
  main: '2px',
  thick: '3px',
};

export const border = {
  transparent: `${borderWidth.main} solid transparent`,
  light: `${borderWidth.main} solid ${borderColor.light}`,
  main: `${borderWidth.main} solid ${borderColor.main}`,
  dark: `${borderWidth.main} solid ${borderColor.dark}`,
  primary: `${borderWidth.main} solid ${borderColor.primary}`,
  secondary: `${borderWidth.main} solid ${borderColor.secondary}`,
  success: `${borderWidth.main} solid ${borderColor.success}`,
  error: `${borderWidth.main} solid ${borderColor.error}`,
  warning: `${borderWidth.main} solid ${borderColor.warning}`,
  disabled: `${borderWidth.main} solid ${borderColor.disabled}`,
};

export const borderRadius = {
  main: 4,
};

export const aspectRatio = {
  '3_4': '75%',
  '16_9': '1.78%',
};

export const height = {
  header: 80,
  footer: 50,
};

const globals = {
  border,
  borderRadius,
  height,
  aspectRatio,
  spaceBase: 10,
};

export default globals;
