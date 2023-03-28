import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Code } from '@klink-ui/core';

const code = `
import { Code } from '@klink-ui/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@klink-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@klink-ui/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};