import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { NumberInput } from '@klink-ui/core';

const code = `
import { NumberInput } from '@klink-ui/core';

function Demo() {
  return <NumberInput disabled />;
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      label="Enter your age"
      placeholder="Your age"
      disabled
      value={20}
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
