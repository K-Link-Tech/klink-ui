import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Code, Group } from '@klink-ui/core';

const code = `
import { Code } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="success">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="success">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
