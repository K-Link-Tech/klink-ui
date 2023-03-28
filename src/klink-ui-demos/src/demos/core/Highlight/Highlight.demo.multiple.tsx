import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Highlight } from '@klink-ui/core';

const code = `
import { Highlight } from '@klink-ui/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
