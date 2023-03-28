import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@klink-ui/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
