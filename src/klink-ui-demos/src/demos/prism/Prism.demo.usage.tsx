import React from 'react';
import { Prism } from '@klink-ui/prism';
import { MantineDemo } from '@klink-ui/ds';

export const demoCode = `
import { Button } from '@klink-ui/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@klink-ui/prism';

const demoCode = \`import { Button } from '@klink-ui/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
