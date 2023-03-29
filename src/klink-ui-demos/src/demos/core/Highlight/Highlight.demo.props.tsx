import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Highlight } from '@klink-ui/core';

const code = `
import { Highlight } from '@klink-ui/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://klink-ui.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Klink UI website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://klink-ui.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Klink UI website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
