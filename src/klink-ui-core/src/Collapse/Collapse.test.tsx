import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@klink-ui/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '50rem' }} />,
};

describe('@klink-ui/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/Collapse',
    providerName: 'Collapse',
  });
});
