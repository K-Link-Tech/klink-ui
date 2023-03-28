import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { ColorInput } from '@klink-ui/core';

const code = `
import { ColorInput } from '@klink-ui/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      disallowInput
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
