import React from 'react';
import { useOs } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { Text } from '@klink-ui/core';

const code = `
import { useOs } from '@klink-ui/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
