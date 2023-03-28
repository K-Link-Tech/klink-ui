import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { PinInput, Group } from '@klink-ui/core';

const code = `
import { PinInput, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
