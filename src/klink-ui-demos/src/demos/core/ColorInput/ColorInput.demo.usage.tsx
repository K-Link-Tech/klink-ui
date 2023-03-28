import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { ColorInput } from '@klink-ui/core';

const code = `
import { ColorInput } from '@klink-ui/core';

function Demo() {
  return <ColorInput placeholder="Pick color" label="Your favorite color" />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      defaultValue="#ffffff"
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
