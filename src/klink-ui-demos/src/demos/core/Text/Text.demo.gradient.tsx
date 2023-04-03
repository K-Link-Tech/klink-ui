import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Text, Group } from '@klink-ui/core';

const code = `
import { Text } from '@klink-ui/core';

function Demo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: 'indigo', to: 'blue_light', deg: 45 }}
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      ta="center"
      fz="xl"
      fw={700}
    >
      Indigo blue_light gradient
    </Text>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'blue_light', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="center"
        fz="xl"
        fw={700}
      >
        Indigo blue_light gradient
      </Text>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
