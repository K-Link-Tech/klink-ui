import React from 'react';
import { Prism } from '@klink-ui/prism';
import { MantineDemo } from '@klink-ui/ds';

const demoCode = `
import { Button } from '@klink-ui/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

const code = `
import { Prism } from '@klink-ui/prism';

const deleted = { color: 'error', label: '-' };
const added = { color: 'success', label: '+' };

function Demo() {
  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {/* ...code */}
    </Prism>
  );
}
`;

function Demo() {
  const deleted = { color: 'error', label: '-' };
  const added = { color: 'success', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {demoCode}
    </Prism>
  );
}

export const linesHighlight: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
