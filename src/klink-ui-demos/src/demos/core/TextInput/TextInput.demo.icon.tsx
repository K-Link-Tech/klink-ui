import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { TextInput } from '@klink-ui/core';

const code = `
import { TextInput } from '@klink-ui/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<IconAt size="0.8rem" />} />;
}
`;

function Demo() {
  return (
    <TextInput
      maw={320}
      mx="auto"
      label="Your email"
      placeholder="Your email"
      icon={<IconAt size="0.8rem" />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
