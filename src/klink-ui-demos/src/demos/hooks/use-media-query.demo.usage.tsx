import React from 'react';
import { Group, Badge, em } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useMediaQuery } from '@klink-ui/hooks';

const code = `
import { Badge } from '@klink-ui/core';
import { useMediaQuery } from '@klink-ui/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'success' : 'error'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Group position="center">
      <Badge color={matches ? 'success' : 'error'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
