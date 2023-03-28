import React from 'react';
import { useDisclosure } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { PasswordInput, Stack } from '@klink-ui/core';

const code = `
import { useDisclosure } from '@klink-ui/hooks';
import { PasswordInput, Stack } from '@klink-ui/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack maw={380} mx="auto">
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

`;

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack maw={380} mx="auto">
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

export const controlledVisibility: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
