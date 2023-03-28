import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineDemo } from '@klink-ui/ds';
import { Input } from '@klink-ui/core';

const code = `
import { Input } from '@klink-ui/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

`;

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input mt="md" component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
