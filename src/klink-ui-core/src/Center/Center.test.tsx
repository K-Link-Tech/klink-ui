import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps = {
  children: 'test-center',
};

describe('@klink-ui/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsProviderVariant(Center, defaultProps, 'Center');
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@klink-ui/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  });
});
