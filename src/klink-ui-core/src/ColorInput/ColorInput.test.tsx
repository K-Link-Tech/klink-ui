import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  label: 'test-label',
};

describe('@klink-ui/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />]);
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsProviderVariant(ColorInput, defaultProps, 'ColorInput', ['root', 'input', 'label']);
  itSupportsProviderSize(ColorInput, defaultProps, 'ColorInput', ['root', 'input', 'label']);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsFocusEvents(ColorInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@klink-ui/core/ColorInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'ColorInput',
  });
});
