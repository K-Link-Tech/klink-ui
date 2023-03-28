import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@klink-ui/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsProviderVariant(Footer, defaultProps, 'Footer');
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@klink-ui/core/Footer',
    refType: HTMLElement,
    providerName: 'Footer',
  });
});
