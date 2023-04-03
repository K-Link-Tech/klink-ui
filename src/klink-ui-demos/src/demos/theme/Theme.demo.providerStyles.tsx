import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Button, Badge, Group, ButtonStylesParams, rem } from '@klink-ui/core';

const code = `
import { MantineProvider, Group, Button, Badge, ButtonStylesParams } from '@klink-ui/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '${rem(42)}',
                padding: '0 ${rem(30)}',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: '${rem(2)}' },
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="blue_light">Filled button</Button>
        <Badge variant="dot">Dot badge</Badge>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: rem(42),
                padding: `0 ${rem(30)}`,
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: rem(2) },
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="blue_light">
          Filled button
        </Button>
        <Badge variant="dot">Dot badge</Badge>
      </Group>
    </MantineProvider>
  );
}

export const providerStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
