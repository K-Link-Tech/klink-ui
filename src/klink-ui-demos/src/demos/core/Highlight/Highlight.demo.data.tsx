import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Highlight } from '@klink-ui/core';

const code = `
import { Highlight } from '@klink-ui/core';

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.rose[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.success[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.rose[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.success[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}

export const data: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
