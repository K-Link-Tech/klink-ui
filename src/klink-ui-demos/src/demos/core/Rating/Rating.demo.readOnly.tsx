import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Rating, Group } from '@klink-ui/core';

const code = `
import { Rating, Group } from '@klink-ui/core';

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Rating value={3.5} fractions={2} readOnly />
    </Group>
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
