import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@klink-ui/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
