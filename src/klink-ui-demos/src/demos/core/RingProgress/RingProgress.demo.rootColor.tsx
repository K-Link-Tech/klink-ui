import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { RingProgress, Group } from '@klink-ui/core';

const code = `
import { RingProgress } from '@klink-ui/core';

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="error" />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="error" />
    </Group>
  );
}

export const rootColor: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
