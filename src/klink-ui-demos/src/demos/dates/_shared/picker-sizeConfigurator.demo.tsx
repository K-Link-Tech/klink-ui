import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group } from '@klink-ui/core';

const getCodeTemplate = (component: string) => (props: string) =>
  `import { ${component} } from '@klink-ui/dates';

function Demo() {
  return <${component} defaultValue={new Date()}${props} />
}
`;

function getDemo(Component: React.FC<any>) {
  return (props: any) => (
    <Group position="center">
      <Component defaultValue={new Date()} {...props} />
    </Group>
  );
}

export function getPickerSizeConfiguratorDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'configurator',
    codeTemplate: getCodeTemplate(Component.displayName.replace('@klink-ui/dates/', '')),
    configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
    component: getDemo(Component),
  };
}
