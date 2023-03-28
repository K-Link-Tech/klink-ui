import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@klink-ui/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsProviderVariant(Skeleton, defaultProps, 'Skeleton');
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@klink-ui/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  });
});
