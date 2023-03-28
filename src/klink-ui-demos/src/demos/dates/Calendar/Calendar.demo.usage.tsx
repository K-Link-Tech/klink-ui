import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { Calendar } from '@klink-ui/dates';

const code = `
import { Group } from '@klink-ui/core';
import { Calendar } from '@klink-ui/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
