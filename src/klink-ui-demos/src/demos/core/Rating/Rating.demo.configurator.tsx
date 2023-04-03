import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { RatingProps, Rating, Group } from '@klink-ui/core';

const codeTemplate = (props: string) => `
import { Rating } from '@klink-ui/core';

function Demo() {
  return <Rating defaultValue={2}${props} />
}
`;

function Wrapper(props: RatingProps) {
  return (
    <Group position="center">
      <Rating defaultValue={2} {...props} />
    </Group>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'warning', defaultValue: 'warning' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'count', type: 'number', initialValue: 5, defaultValue: 5, min: 1, max: 15 },
    { name: 'highlightSelectedOnly', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
