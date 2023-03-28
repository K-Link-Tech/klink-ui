import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { MonthPicker } from '@klink-ui/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@klink-ui/core';
import { MonthPicker } from '@klink-ui/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker locale="ru" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker locale="ru" />
    </Group>
  );
}

export const locale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
