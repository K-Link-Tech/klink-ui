import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, Checkbox, Radio, MantineProvider } from '@klink-ui/core';

const code = `
import { Group, Checkbox, Radio, MantineProvider } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <Group>
        <Checkbox label="Default checkbox" />
        <Radio label="Default radio" value="pointer" />
      </Group>

      <MantineProvider inherit theme={{ cursorType: 'pointer' }}>
        <Group mt="xl">
          <Checkbox label="Checkbox with pointer" />
          <Radio label="Radio with pointer" value="pointer" />
        </Group>
      </MantineProvider>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Group>
        <Checkbox label="Default checkbox" />
        <Radio label="Default radio" value="pointer" />
      </Group>

      <MantineProvider inherit theme={{ cursorType: 'pointer' }}>
        <Group mt="xl">
          <Checkbox label="Checkbox with pointer" />
          <Radio label="Radio with pointer" value="pointer" />
        </Group>
      </MantineProvider>
    </>
  );
}

export const cursorType: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
