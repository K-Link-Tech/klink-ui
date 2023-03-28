import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Progress } from '@klink-ui/core';

const code = `
import { Progress } from '@klink-ui/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
