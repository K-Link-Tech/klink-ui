import React from 'react';
import { Drawer, Group, Button, TextInput } from '@klink-ui/core';
import { useDisclosure } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';

const code = `
import { useDisclosure } from '@klink-ui/hooks';
import { Drawer, Group, Button, TextInput } from '@klink-ui/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open drawer</Button>
      </Group>
    </>
  );
}

export const initialFocus: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
