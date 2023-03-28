import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@klink-ui/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@klink-ui/core/Box', () => {
  itRendersChildren(Box as any, defaultProps);
  itIsPolymorphic(Box as any, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@klink-ui/core/Box',
    refType: HTMLDivElement,
  });
});
