import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, CopyButton, Button } from '@klink-ui/core';

const code = `
import { CopyButton, Button } from '@klink-ui/core';

function Demo() {
  return (
    <CopyButton value="https://klink-ui.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'success' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CopyButton value="https://klink-ui.dev">
        {({ copied, copy }) => (
          <Button color={copied ? 'success' : 'blue'} onClick={copy}>
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        )}
      </CopyButton>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
