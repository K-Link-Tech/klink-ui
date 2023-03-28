import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@klink-ui/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
    />
  );
}

export const closeOnTrigger: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
