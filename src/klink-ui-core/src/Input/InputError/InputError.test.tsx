import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { InputError, InputErrorProps } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@klink-ui/core/InputError', () => {
  itRendersChildren(InputError, defaultProps);
  itSupportsProviderVariant(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsProviderSize(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/InputError',
    providerName: 'InputError',
  });
});
