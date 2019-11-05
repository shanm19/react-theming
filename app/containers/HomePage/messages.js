/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  head: {
    id: `${scope}.head`,
    defaultMessage: 'Homepage',
  },
  subhead: {
    id: `${scope}.subhead`,
    defaultMessage: 'This is the HomePage container!',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Click Me',
  },
  paper: {
    id: `${scope}.paper`,
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
});
