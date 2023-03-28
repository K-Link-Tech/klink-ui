import React from 'react';
import { MultiSelect } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@klink-ui/core';

function Demo() {
  return <MultiSelect maxSelectedValues={3} />;
}
`;

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Pick 3 values or less"
      placeholder="Pick 3 values or less"
      searchable
      maxSelectedValues={3}
    />
  );
}

export const maxSelectedValues: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
