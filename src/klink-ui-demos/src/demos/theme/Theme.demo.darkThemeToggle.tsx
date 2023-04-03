import React from 'react';
import { Group, ActionIcon, useMantineColorScheme } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const code = `
import { ActionIcon, useMantineColorScheme } from '@klink-ui/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'warning' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
}
`;

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center">
      <ActionIcon
        variant="outline"
        color={dark ? 'warning' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
      </ActionIcon>
    </Group>
  );
}

export const darkThemeToggle: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
