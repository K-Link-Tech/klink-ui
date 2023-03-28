import React from 'react';
import { Group, Badge } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useIdle } from '@klink-ui/hooks';

const eventsCode = `
import { Badge } from '@klink-ui/core';
import { useIdle } from '@klink-ui/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'success'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: MantineDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
