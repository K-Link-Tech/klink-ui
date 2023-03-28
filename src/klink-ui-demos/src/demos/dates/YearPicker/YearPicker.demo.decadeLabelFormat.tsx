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
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}

export const decadeLabelFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};