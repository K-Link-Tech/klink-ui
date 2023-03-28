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
      <DatePicker hideOutsideDates />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideOutsideDates />
    </Group>
  );
}

export const hideOutsideDates: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
