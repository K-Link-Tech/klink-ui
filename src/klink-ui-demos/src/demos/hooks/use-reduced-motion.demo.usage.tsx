import React from 'react';
import { Group, Badge } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useReducedMotion } from '@klink-ui/hooks';

const code = `
import { Badge } from '@klink-ui/core';
import { useReducedMotion } from '@klink-ui/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'error' : 'success'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Group position="center">
      <Badge
        color={reduceMotion ? 'error' : 'success'}
        style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
        variant="filled"
      >
        {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
      </Badge>
    </Group>
  );
}

export const useReducedMotionDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
