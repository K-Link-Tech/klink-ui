import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Button, MantineProvider, Group } from '@klink-ui/core';

const code = `
import { Button, MantineProvider } from '@klink-ui/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Button>Press me</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider inherit theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Group position="center">
        <Button>Press me</Button>
      </Group>
    </MantineProvider>
  );
}

export const activeStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
