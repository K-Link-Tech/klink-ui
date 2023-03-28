import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@klink-ui/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsProviderVariant(Header, defaultProps, 'Header');
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@klink-ui/core/Header',
    refType: HTMLElement,
    providerName: 'Header',
  });
});
