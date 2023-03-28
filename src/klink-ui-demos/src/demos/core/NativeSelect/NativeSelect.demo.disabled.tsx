import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { NativeSelect } from '@klink-ui/core';

const code = `
import { NativeSelect } from '@klink-ui/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <NativeSelect
      maw={320}
      mx="auto"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      label="Disabled select"
      placeholder="Pick one that you like"
      disabled
    />
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
