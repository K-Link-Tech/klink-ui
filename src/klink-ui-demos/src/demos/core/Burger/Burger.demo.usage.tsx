import React from 'react';
import { Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { DemoBase } from './_base';

const code = `
import { useDisclosure } from '@klink-ui/hooks';
import { Burger } from '@klink-ui/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
