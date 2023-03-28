import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { InputDescription, InputDescriptionProps } from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@klink-ui/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps);
  itSupportsProviderVariant(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsProviderSize(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/InputDescription',
    providerName: 'InputDescription',
  });
});
