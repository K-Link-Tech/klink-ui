import React, { useRef } from 'react';
import { Button, Group } from '@klink-ui/core';
import { Dropzone } from '@klink-ui/dropzone';
import { MantineDemo } from '@klink-ui/ds';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@klink-ui/core';
import { Dropzone } from '@klink-ui/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center">
          <Button onClick={() => openRef.current()}>Select files</Button>
        </Group>
      </Dropzone>
    </>
  );
}

`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
        <Group position="center">
          <Button onClick={() => openRef.current()}>Select files</Button>
        </Group>
      </Dropzone>
    </>
  );
}

export const enableChildPointerEvent: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
