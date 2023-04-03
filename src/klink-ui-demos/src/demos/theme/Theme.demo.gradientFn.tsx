import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Center, Group, rem } from '@klink-ui/core';

const code = `
import { MantineProvider, Center, Group } from '@klink-ui/core';

function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'success', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: '${rem(40)}',
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: '${rem(40)}',
            backgroundImage: theme.fn.gradient({ from: 'error', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider inherit theme={{ defaultGradient: { from: 'blue', to: 'success', deg: 20 } }}>
      <Group position="center" grow>
        <Center
          sx={(theme) => ({
            height: rem(40),
            backgroundImage: theme.fn.gradient(),
            color: theme.white,
          })}
        >
          Default gradient
        </Center>

        <Center
          sx={(theme) => ({
            height: rem(40),
            backgroundImage: theme.fn.gradient({ from: 'error', to: 'orange', deg: 45 }),
            color: theme.white,
          })}
        >
          Custom gradient
        </Center>
      </Group>
    </MantineProvider>
  );
}

export const gradientFn: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
