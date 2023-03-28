import React, { useState } from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { YearPicker } from '@klink-ui/dates';

const code = `
import { useState } from 'react';
import { Group } from '@klink-ui/core';
import { YearPicker } from '@klink-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2028, 1)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
