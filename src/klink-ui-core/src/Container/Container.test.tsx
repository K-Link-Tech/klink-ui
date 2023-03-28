import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@klink-ui/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsProviderVariant(Container, defaultProps, 'Container');
  itSupportsProviderSize(Container, defaultProps, 'Container');
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@klink-ui/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  });
});
