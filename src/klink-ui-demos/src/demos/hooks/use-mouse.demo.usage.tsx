import React from 'react';
import { Text, Code } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useMouse } from '@klink-ui/hooks';

const code = `
import { Text, Code } from '@klink-ui/core';
import { useMouse } from '@klink-ui/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
