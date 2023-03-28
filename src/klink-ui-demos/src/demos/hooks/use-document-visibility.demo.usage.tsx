import React from 'react';
import { Text } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { useDocumentTitle, useDocumentVisibility } from '@klink-ui/hooks';

const code = `
import { Text } from '@klink-ui/core';
import { useDocumentTitle, useDocumentVisibility } from '@klink-ui/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
