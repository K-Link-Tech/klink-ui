import React, { useState } from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@klink-ui/core';
import { ${name} } from '@klink-ui/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <${name} allowDeselect value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Group position="center">
        <Component allowDeselect value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerDeselectDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@klink-ui/dates/', '')),
    component: getDemo(Component),
  };
}
