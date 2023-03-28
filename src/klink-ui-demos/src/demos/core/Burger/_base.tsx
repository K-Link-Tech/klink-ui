import React from 'react';
import { useDisclosure } from '@klink-ui/hooks';
import { Burger } from '@klink-ui/core';

export function DemoBase(
  props: Omit<React.ComponentPropsWithoutRef<typeof Burger>, 'opened' | 'onChange'>
) {
  const [opened, { toggle }] = useDisclosure(false);
  return <Burger m="xs" opened={opened} onClick={toggle} {...props} />;
}
