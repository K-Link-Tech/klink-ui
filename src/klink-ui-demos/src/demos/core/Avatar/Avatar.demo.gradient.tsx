import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Avatar, Group } from '@klink-ui/core';

const code = `
import { IconPhoto } from '@tabler/icons-react';
import { Avatar, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <Avatar variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'orange', to: 'red' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} radius="xl" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'orange', to: 'red' }} radius="xl" />
      <Avatar
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        radius="xl"
      />
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};