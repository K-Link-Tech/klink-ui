import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { NativeSelect } from '@klink-ui/core';

const code = `
import { NativeSelect } from '@klink-ui/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={40}
    />
  );
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={30}
    />
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};