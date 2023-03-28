import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MonthPickerInput } from '@klink-ui/dates';

const code = `
import { MonthPickerInput } from '@klink-ui/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
      mx="auto"
      maw={400}
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
