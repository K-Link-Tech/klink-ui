import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Pagination } from '@klink-ui/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
