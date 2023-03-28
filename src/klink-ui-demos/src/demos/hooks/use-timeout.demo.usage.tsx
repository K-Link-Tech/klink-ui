import React, { useState } from 'react';
import { Button, Text, Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { randomId, useTimeout } from '@klink-ui/hooks';

const code = `
import { useState } from 'react';
import { Button, Text, Group } from '@klink-ui/core';
import { randomId, useTimeout } from '@klink-ui/hooks';

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Group>
      <Button onClick={start} variant="outline">
        Start
      </Button>
      <Button onClick={clear} variant="outline" color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Group>
  );
}

export const useTimeoutDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
