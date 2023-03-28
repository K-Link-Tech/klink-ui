import React, { useState } from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { useMantineTheme, ColorSwatch, Group, CheckIcon, rem } from '@klink-ui/core';

const code = `
import { useState } from 'react';
import { ColorSwatch, Group, useMantineTheme, CheckIcon, rem } from '@klink-ui/core';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch
        component="button"
        color={theme.colors.rose[6]}
        onClick={() => setChecked((c) => !c)}
        sx={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon width={rem(10)} />}
      </ColorSwatch>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch
        component="button"
        color={theme.colors.rose[6]}
        onClick={() => setChecked((c) => !c)}
        sx={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon width={rem(10)} />}
      </ColorSwatch>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
