import React, { useState } from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';
import { DatePicker } from '@klink-ui/dates';

const code = `
import { useState } from 'react';
import { Group } from '@klink-ui/core';
import { DatePicker } from '@klink-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2021, 7)}
        getDayProps={(date) => {
          if (date.getDay() === 5 && date.getDate() === 13) {
            return {
              sx: (theme) => ({
                backgroundColor: theme.colors.error[theme.fn.primaryShade()],
                color: theme.white,
                ...theme.fn.hover({ backgroundColor: theme.colors.error[7] }),
              }),
            };
          }

          return {};
        }}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
        getMonthControlProps={(date) => {
          if (date.getMonth() === 1) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getMonth() === 5) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2021, 7)}
        getDayProps={(date) => {
          if (date.getDay() === 5 && date.getDate() === 13) {
            return {
              sx: (theme) => ({
                backgroundColor: theme.colors.error[theme.fn.primaryShade()],
                color: theme.white,
                ...theme.fn.hover({ backgroundColor: theme.colors.error[7] }),
              }),
            };
          }

          return {};
        }}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
        getMonthControlProps={(date) => {
          if (date.getMonth() === 1) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getMonth() === 5) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}

export const controlProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
