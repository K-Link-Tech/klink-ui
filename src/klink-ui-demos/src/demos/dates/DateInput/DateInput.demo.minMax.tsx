import dayjs from 'dayjs';
import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { DateInput } from '@klink-ui/dates';

const code = `
import { DateInput } from '@klink-ui/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
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
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
