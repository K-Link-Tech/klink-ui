import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { PinInput, Group } from '@klink-ui/core';

const code = `
import { PinInput, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}

export const error: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
