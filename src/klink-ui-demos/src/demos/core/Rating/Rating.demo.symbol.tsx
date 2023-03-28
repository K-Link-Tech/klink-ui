import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, Rating } from '@klink-ui/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const code = `
import { Group, Rating } from '@klink-ui/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />
    </Group>
  );
}

export const symbol: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
