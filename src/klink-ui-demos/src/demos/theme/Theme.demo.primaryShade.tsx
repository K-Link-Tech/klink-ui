import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { MantineProvider, Group, Button, MantineTheme } from '@klink-ui/core';

function Wrapper({ primaryShade }: { primaryShade: MantineTheme['primaryShade'] }) {
  return (
    <MantineProvider inherit theme={{ primaryShade }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}

const codeTemplate = (props: string) => `
import { MantineProvider, Group, Button } from '@klink-ui/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props
      .replace(' primaryShade={', '')
      .replace('}', '')} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </MantineProvider>
  );
}
`;

export const primaryShade: MantineDemo = {
  type: 'configurator',
  component: Wrapper as any,
  codeTemplate,
  configurator: [{ name: 'primaryShade', type: 'number', initialValue: 6, min: 0, max: 9 }],
};
