import React from 'react';
import { MantineDemo } from '@klink-ui/ds';
import { useTextSelection } from '@klink-ui/hooks';

const code = `
import { useTextSelection } from '@klink-ui/hooks';
function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>
        Selected text: <b>{selection?.toString()}</b>
      </div>
    </>
  );
}

export const useTextSelectionUsage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
