import React from 'react';
import { Group, Badge } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useIdle } from '@klink-ui/hooks';

const code = `
import { Badge } from '@klink-ui/core';
import { useIdle } from '@klink-ui/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
