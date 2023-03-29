import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { Menu, Group, Button, rem } from '@klink-ui/core';

const code = `
import { Menu, Button, rem } from '@klink-ui/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://klink-ui.dev">
          Klink UI website
        </Menu.Item>

        <Menu.Item
          icon={<IconExternalLink size={rem(14)} />}
          component="a"
          href="https://klink-ui.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component="a" href="https://klink-ui.dev">
            Klink UI website
          </Menu.Item>
          <Menu.Item
            icon={<IconExternalLink size={rem(14)} />}
            component="a"
            href="https://klink-ui.dev"
            target="_blank"
          >
            External link
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
