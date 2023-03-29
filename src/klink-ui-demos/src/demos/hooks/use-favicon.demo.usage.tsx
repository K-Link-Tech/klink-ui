import React, { useState } from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { useFavicon } from '@klink-ui/hooks';
import { Group, Button } from '@klink-ui/core';

const code = `
import { useState } from 'react';
import { useFavicon } from '@klink-ui/hooks';
import { Group, Button } from '@klink-ui/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://klink-ui.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://klink-ui.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Klink UI favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState('https://klink-ui.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://klink-ui.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group position="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Klink UI favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
