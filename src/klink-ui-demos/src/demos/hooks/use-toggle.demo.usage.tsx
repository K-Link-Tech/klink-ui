import React from 'react';
import { Button, Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useToggle, upperFirst } from '@klink-ui/hooks';

const code = `
import { Button } from '@klink-ui/core';
import { useToggle } from '@klink-ui/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'blue_light', 'success']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'blue_light', 'success']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
