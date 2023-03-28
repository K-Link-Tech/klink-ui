import React from 'react';
import { useWindowScroll } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { Button, Text, Group } from '@klink-ui/core';

const code = `
import { useWindowScroll } from '@klink-ui/hooks';
import { Button, Text, Group } from '@klink-ui/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
