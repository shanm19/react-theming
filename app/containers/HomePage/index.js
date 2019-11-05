/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import L from 'components/L';
import Button from 'components/Button';
import Type from 'components/Type';
import messages from './messages';

export default function HomePage() {
  return (
    <L container>
      <Type variant="h1" messages={messages.header} />
      <Button>
        <Type messages={messages.header} />
      </Button>
    </L>
  );
}
