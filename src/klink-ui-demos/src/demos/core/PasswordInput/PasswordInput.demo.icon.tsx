import React from 'react';
import { IconLock } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { PasswordInput } from '@klink-ui/core';

const code = `
import { PasswordInput } from '@klink-ui/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}
`;

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Your password"
      placeholder="Your password"
      icon={<IconLock size="1rem" />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
