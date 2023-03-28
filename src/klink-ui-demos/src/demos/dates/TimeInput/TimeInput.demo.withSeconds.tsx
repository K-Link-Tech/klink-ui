import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { TimeInput } from '@klink-ui/dates';

const code = `
import { TimeInput } from '@klink-ui/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
