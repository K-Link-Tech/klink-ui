import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, Pagination } from '@klink-ui/core';

const code = `
import { Group, Pagination } from '@klink-ui/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group spacing={5} position="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`;

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group spacing={5} position="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}

export const composition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
