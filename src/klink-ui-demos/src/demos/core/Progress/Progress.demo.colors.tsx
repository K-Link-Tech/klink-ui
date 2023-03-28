import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Progress } from '@klink-ui/core';

const code = `
import { Progress } from '@klink-ui/core';

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
