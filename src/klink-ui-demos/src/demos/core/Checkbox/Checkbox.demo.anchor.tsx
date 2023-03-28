import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Checkbox, Anchor } from '@klink-ui/core';

const code = `
import { Checkbox, Anchor } from '@klink-ui/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://klink-ui.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://klink-ui.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
