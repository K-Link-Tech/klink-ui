import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { PinInput, Group } from '@klink-ui/core';

const code = `
import { PinInput, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
