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
      <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}

export const listFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
