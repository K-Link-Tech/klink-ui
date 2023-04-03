import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Button, Group } from '@klink-ui/core';

const code = `
import { MantineProvider, Button, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'error',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient">Default gradient button</Button>
      <MantineProvider
        inherit
        theme={{
          defaultGradient: {
            from: 'orange',
            to: 'error',
            deg: 45,
          },
        }}
      >
        <Button variant="gradient">Gradient from provider</Button>
      </MantineProvider>
    </Group>
  );
}

export const defaultGradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
