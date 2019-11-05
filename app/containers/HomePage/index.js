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
import Paper from 'components/Paper';
import messages from './messages';

export default function HomePage() {
  return (
    <L>
      <L bgColor="primary">
        <L container display="grid" gap={3} pY={8}>
          <Type variant="h1" messages={messages.head} />
          <Type variant="body" messages={messages.subhead} />
          <Button color="secondary">
            <Type messages={messages.button} />
          </Button>
          <L display="grid" flow={{ xx: "row", md: "column" }} gap={2}>
            <Paper p={2} depth={2} depthHover={6} round>
              <L display="grid" gap={2}>
                <Type messages={messages.paper} />
                <Button outlined color="primary">
                  <Type messages={messages.button} />
                </Button>
              </L>
            </Paper>
            <Paper p={2} depth={2} depthHover={6} round>
              <L display="grid" gap={2}>
                <Type messages={messages.paper} />
                <Button outlined color="primary">
                  <Type messages={messages.button} />
                </Button>
              </L>
            </Paper>
            <Paper p={2} depth={2} depthHover={6} round>
              <L display="grid" gap={2}>
                <Type messages={messages.paper} />
                <Button outlined color="primary">
                  <Type messages={messages.button} />
                </Button>
              </L>
            </Paper>
          </L>
        </L>
      </L>
      <L display="grid" flow={{ xx: "row", md: "column" }}>
        <L display="grid" gap={2} pY={10} pX={10} jc={{ md: 'flex-end' }}>
          <Type variant="h1" messages={messages.head} />
          <Type variant="body" messages={messages.subhead} />
          <Button color="primary">
            <Type messages={messages.button} />
          </Button>
        </L>
        <L display="grid" gap={2} bgGradient="a" pY={10} pX={10} jc={{ md: 'flex-start' }}>
          <Type variant="h1" messages={messages.head} />
          <Type variant="body" messages={messages.subhead} />
          <Button color="primary">
            <Type messages={messages.button} />
          </Button>
        </L>
      </L>
      <L bgColor="secondary">
        <L container display="grid" gap={3} pY={8}>
          <Type variant="h1" messages={messages.head} />
          <Type variant="body" messages={messages.subhead} />
          <Button color="primary">
            <Type messages={messages.button} />
          </Button>
          <Paper p={2} depth={2} depthHover={6} round>
            <Type messages={messages.paper} />
          </Paper>
        </L>
      </L>
      <L>
        <L container display="grid" gap={3} pY={8}>
          <Type variant="h1" messages={messages.head} />
          <Type variant="body" messages={messages.subhead} />
          <Button color="primary">
            <Type messages={messages.button} />
          </Button>
          <Paper p={2} depth={2} depthHover={6} round>
            <Type messages={messages.paper} />
          </Paper>
        </L>
      </L>
    </L>
  );
}
