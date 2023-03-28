import React from 'react';
import { Avatar, Group } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@klink-ui/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Avatar
        component="a"
        href="https://github.com/rtivital"
        target="_blank"
        src={avatars[0]}
        alt="it's me"
      />
    </Group>
  );
}

export const link: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
