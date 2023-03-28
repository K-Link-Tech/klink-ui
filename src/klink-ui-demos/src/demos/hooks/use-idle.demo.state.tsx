import React from 'react';
import { Group, Badge } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useIdle } from '@klink-ui/hooks';

const initialStateCode = `
import { Badge } from '@klink-ui/core';
import { useIdle } from '@klink-ui/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: MantineDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
