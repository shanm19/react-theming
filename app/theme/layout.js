import mixins from './mixins';
import globals from './globals';

const layout = {
  gutter: {
    between: 30,
    edge: 15,
  },
  absoluteXCenter: `
    position: absolute;
    left: 0,
    right: 0,
    margin-left: auto;
    margin-right: auto;
  `,
  absoluteCenter: `
    position: absolute;
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: auto;
  `,
  absoluteYCenter: `
    position: absolute;
    top: 0,
    bottom: 0,
    margin-top: auto;
    margin-bottom: auto;
  `,
  mXCenter: `
    margin-left: auto;
    margin-right: auto;
  `,
  mYCenter: `
    margin-top: auto;
    margin-bottom: auto;
  `,
  mCenter: `
    margin: auto;
  `,
  flexYCenter: `
    display: flex;
    align-items: center;
  `,
  flexXCenter: `
    display: flex;
    justify-content: center;
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default layout;
