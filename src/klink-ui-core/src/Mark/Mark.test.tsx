import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@klink-ui/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsProviderVariant(Mark, defaultProps, 'Mark');
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@klink-ui/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  });
});
