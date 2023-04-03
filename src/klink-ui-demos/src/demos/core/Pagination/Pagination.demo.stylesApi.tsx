import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Pagination } from '@klink-ui/core';

const code = `
import { Pagination } from '@klink-ui/core';

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'error', to: 'warning' }),
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'error', to: 'warning' }),
          },
        },
      })}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
