import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Button } from '@klink-ui/core';

const code = `
import { MantineProvider, Button } from '@klink-ui/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}

export const defaultPropsTheme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
