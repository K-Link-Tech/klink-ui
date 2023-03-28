import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Autocomplete } from '@klink-ui/core';

const code = `
import { Autocomplete } from '@klink-ui/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      hoverOnSearchChange
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        hoverOnSearchChange
      />
    </div>
  );
}

export const hoverOnChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
