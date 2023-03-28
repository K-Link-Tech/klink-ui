import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Tooltip, Button, Group } from '@klink-ui/core';

const code = `
import { Tooltip, Button } from '@klink-ui/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip">
        <Button variant="outline">Button with tooltip</Button>
      </Tooltip>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
