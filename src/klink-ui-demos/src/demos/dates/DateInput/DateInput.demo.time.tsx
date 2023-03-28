import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { DateInput } from '@klink-ui/dates';

const code = `
import { DateInput } from '@klink-ui/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const time: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
