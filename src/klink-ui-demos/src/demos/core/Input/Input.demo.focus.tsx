import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Input } from '@klink-ui/core';

const code = `
import { Input } from '@klink-ui/core';

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
