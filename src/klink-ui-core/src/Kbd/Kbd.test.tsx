import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = {
  children: 'test',
};

describe('@klink-ui/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsProviderVariant(Kbd, defaultProps, 'Kbd');
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@klink-ui/core/Kbd',
    refType: HTMLElement,
    providerName: 'Kbd',
  });
});
