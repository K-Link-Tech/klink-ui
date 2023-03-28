import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@klink-ui/dates';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@klink-ui/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
