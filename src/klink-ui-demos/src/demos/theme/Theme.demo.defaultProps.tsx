import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Group, Button, Switch, ButtonProps, SwitchProps } from '@klink-ui/core';

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: 'xs',
  color: 'blue_light',
};

const SwitchDefaultProps: Partial<SwitchProps> = {
  size: 'xs',
  onLabel: 'ON',
  offLabel: 'OFF',
};

const code = `
import { MantineProvider, Group, Button, Switch } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Button: {
              defaultProps: {
                size: 'xs',
                color: 'blue_light',
              },
            },

            Switch: {
              defaultProps: {
                size: 'xs',
                onLabel: 'ON',
                offLabel: 'OFF',
              },
            },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <MantineProvider
        inherit
        theme={{
          components: {
            Button: { defaultProps: ButtonDefaultProps },
            Switch: { defaultProps: SwitchDefaultProps },
          },
        }}
      >
        <Group position="center">
          <Button>Within provider</Button>
          <Switch label="Within provider" />
        </Group>
      </MantineProvider>

      <Group position="center" mt="md">
        <Button>Outside of provider</Button>
        <Switch label="Outside of provider" />
      </Group>
    </>
  );
}

export const defaultProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
