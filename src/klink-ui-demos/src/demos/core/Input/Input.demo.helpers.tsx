import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Input } from '@klink-ui/core';

const code = `
import { Input } from '@klink-ui/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}

export const helpers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
