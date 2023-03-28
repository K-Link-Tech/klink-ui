import React from 'react';
import { TextInput, Text } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { usePrevious, useInputState } from '@klink-ui/hooks';

const code = `
import { TextInput, Text } from '@klink-ui/core';
import { usePrevious, useInputState } from '@klink-ui/hooks';

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}
`;

function Demo() {
  const [value, setValue] = useInputState('');
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
}

export const usePreviousUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
