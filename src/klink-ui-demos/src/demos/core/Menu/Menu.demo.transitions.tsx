import React from 'react';
import { Group, Menu } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@klink-ui/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
