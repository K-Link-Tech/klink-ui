import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@klink-ui/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsProviderVariant(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsProviderSize(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@klink-ui/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  });
});
