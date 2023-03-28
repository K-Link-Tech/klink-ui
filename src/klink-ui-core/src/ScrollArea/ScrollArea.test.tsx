import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@klink-ui/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsProviderVariant(ScrollArea, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@klink-ui/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  });
});

describe('@klink-ui/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps);
  itSupportsProviderVariant(ScrollArea.Autosize, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@klink-ui/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
