import React from 'react';
import { Group, Button } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { notifications } from '@klink-ui/notifications';

const code = `
import { Group, Button } from '@klink-ui/core';
import { notifications } from '@klink-ui/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export const base: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
