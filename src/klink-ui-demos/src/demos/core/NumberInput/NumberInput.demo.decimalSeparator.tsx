import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { NumberInput } from '@klink-ui/core';

const code = `
import { NumberInput } from '@klink-ui/core';

function Demo() {
  return (
    <NumberInput
      decimalSeparator=","
      label="Number input with a custom decimal separator"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      maw={320}
      mx="auto"
      decimalSeparator=","
      label="Number input with a custom decimal separator"
      placeholder="Decimal separator"
      defaultValue={0.5}
      precision={2}
      step={0.5}
    />
  );
}

export const decimalSeparator: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
