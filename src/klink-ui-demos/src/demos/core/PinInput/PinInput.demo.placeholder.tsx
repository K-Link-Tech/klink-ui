import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { PinInput, Group } from '@klink-ui/core';

const code = `
import { PinInput, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
