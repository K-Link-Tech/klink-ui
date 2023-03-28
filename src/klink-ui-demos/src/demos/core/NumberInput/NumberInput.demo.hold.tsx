import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { NumberInput, Box } from '@klink-ui/core';

const code = `
import { NumberInput } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={420} mx="auto">
      <NumberInput
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />
      <NumberInput
        mt="md"
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        placeholder="Hold mouse down on control button"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </Box>
  );
}

export const hold: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
