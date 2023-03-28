import React from 'react';
import { Menu, Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@klink-ui/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" openDelay={100} closeDelay={400}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
