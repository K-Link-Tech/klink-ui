import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { MonthPicker } from '@klink-ui/dates';

const code = `
import { Group } from '@klink-ui/core';
import { MonthPicker } from '@klink-ui/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
