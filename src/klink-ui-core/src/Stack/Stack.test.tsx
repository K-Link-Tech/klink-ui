import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@klink-ui/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsProviderVariant(Stack, defaultProps, 'Stack');
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@klink-ui/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  });
});
