import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { ThemeIcon, RingProgress, Group, Text, Center } from '@klink-ui/core';

const code = `
import { ThemeIcon, RingProgress, Text, Center } from '@klink-ui/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'success' }]}
        label={
          <Center>
            <ThemeIcon color="success" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'success' }]}
        label={
          <Center>
            <ThemeIcon color="success" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </Group>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
