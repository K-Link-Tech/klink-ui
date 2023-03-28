import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Switch, Group } from '@klink-ui/core';

const code = `
import { Switch } from '@klink-ui/core';

function Demo() {
  return <Switch onLabel="ON" offLabel="OFF" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}

export const labels: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
