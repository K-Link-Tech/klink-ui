import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Anchor } from '@klink-ui/core';

const code = `
import { Anchor } from '@klink-ui/core';

function Demo() {
  return (
    <Anchor href="https://klink-ui.dev/" target="_blank">
      Klink UI docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://klink-ui.dev/" target="_blank">
      Klink UI docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
