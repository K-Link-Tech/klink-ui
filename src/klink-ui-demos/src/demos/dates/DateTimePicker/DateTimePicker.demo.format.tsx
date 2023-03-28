import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { DateTimePicker } from '@klink-ui/dates';

const code = `
import { DateTimePicker } from '@klink-ui/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}

export const format: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
