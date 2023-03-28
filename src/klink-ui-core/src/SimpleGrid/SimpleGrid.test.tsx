import React from 'react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@klink-ui/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsProviderVariant(SimpleGrid, defaultProps, 'SimpleGrid');
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@klink-ui/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  });
});
