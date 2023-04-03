import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, Badge } from '@klink-ui/core';

const code = `
import { Badge } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
      <Badge variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }}>Lime green</Badge>
      <Badge variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>Teal blue</Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'error' }}>Orange red</Badge>
      <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Badge>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'success', to: 'lime', deg: 105 }}>
        Lime green
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'success', to: 'blue', deg: 60 }}>
        Teal blue
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'error' }}>
        Orange red
      </Badge>
      <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        Peach
      </Badge>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
