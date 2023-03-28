import React from 'react';
import { Input } from '@klink-ui/core';
import { useId } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { IMaskInput } from 'react-imask';

const code = `
import { Input } from '@klink-ui/core';
import { useId } from '@klink-ui/hooks';
import { IMaskInput } from 'react-imask';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
      <Input<any>
        component={IMaskInput}
        mask="+7 (000) 000-00-00"
        id={id}
        placeholder="Your phone"
      />
    </Input.Wrapper>
  );
}
`;

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
      <Input<any>
        component={IMaskInput}
        mask="+7 (000) 000-00-00"
        id={id}
        placeholder="Your phone"
      />
    </Input.Wrapper>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
