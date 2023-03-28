import React from 'react';
import { Group, Badge } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useColorScheme } from '@klink-ui/hooks';

const code = `
import { Badge } from '@klink-ui/core';
import { useColorScheme } from '@klink-ui/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'success'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'success'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
