import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { DatePicker } from '@klink-ui/dates';

const code = `
import { Group } from '@klink-ui/core';
import { DatePicker } from '@klink-ui/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}

export const defaultLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
