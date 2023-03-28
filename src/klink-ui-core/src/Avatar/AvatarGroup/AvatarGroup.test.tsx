import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@klink-ui/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsProviderVariant(AvatarGroup, defaultProps, 'AvatarGroup');
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
