import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@klink-ui/hooks';
import { MantineDemo } from '@klink-ui/ds';
import { Group, Button } from '@klink-ui/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@klink-ui/hooks';
import { Button } from '@klink-ui/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
