import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { useMantineTheme, ColorSwatch, Group } from '@klink-ui/core';

const code = `
import { ColorSwatch, Group, useMantineTheme } from '@klink-ui/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const transparent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
