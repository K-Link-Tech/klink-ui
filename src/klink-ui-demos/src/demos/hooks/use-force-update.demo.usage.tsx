import React from 'react';
import { Button, Text, Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useForceUpdate, randomId } from '@klink-ui/hooks';

const code = `
import { Button, Text, Group } from '@klink-ui/core';
import { useForceUpdate, randomId } from '@klink-ui/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
