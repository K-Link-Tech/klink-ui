import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { Group, MANTINE_COLORS, Badge } from '@klink-ui/core';

function Demo() {
  const items = MANTINE_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot">
      {color}
    </Badge>
  ));

  return <Group position="center">{items}</Group>;
}

export const dots: MantineDemo = {
  type: 'demo',
  component: Demo,
};
