import { itSupportsSystemProps, itRendersChildren } from '@klink-ui/tests';
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@klink-ui/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps);
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@klink-ui/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  });
});
