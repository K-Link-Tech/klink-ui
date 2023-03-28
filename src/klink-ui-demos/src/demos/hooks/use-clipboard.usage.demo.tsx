import React from 'react';
import { Group, Button } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useClipboard } from '@klink-ui/hooks';

const code = `
import { Button } from '@klink-ui/core';
import { useClipboard } from '@klink-ui/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'success' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'success' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
