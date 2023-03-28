import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Select, Box } from '@klink-ui/core';

const code = `
// Error as boolean – red border color
<Select error />

// Error as React node – red border color and message below input
<Select error="Pick at least one item" />
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Select
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        withinPortal
        error
      />

      <Select
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error="Pick at least one item"
        withinPortal
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
