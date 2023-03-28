import React from 'react';
import { useViewportSize } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { Text } from '@klink-ui/core';

const code = `
import { useViewportSize } from '@klink-ui/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
