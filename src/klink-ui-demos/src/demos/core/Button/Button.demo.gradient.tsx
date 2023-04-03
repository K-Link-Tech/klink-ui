import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Button, Group } from '@klink-ui/core';

const code = `
import { Button } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }}>Lime green</Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>Teal blue</Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'error' }}>Orange red</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }}>
        Lime green
      </Button>
      <Button variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>
        Teal blue
      </Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'error' }}>
        Orange red
      </Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        Peach
      </Button>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
