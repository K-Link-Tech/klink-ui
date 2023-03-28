import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itIsPolymorphic,
  itSupportsProviderSize,
  itSupportsProviderVariant,
  itRendersChildren,
} from '@klink-ui/tests';
import { rem } from '@klink-ui/styles';
import { CloseButton, CloseButtonProps } from './CloseButton';

const defaultProps: CloseButtonProps = {};

describe('@klink-ui/core/CloseButton', () => {
  checkAccessibility([<CloseButton aria-label="test" />, <CloseButton title="test" />]);
  itSupportsFocusEvents(CloseButton, defaultProps, '.klink-ui-CloseButton-root');
  itIsPolymorphic(CloseButton, defaultProps);
  itRendersChildren(CloseButton, defaultProps);
  itSupportsProviderSize(CloseButton, defaultProps, 'CloseButton');
  itSupportsProviderVariant(CloseButton, defaultProps, 'CloseButton');
  itSupportsSystemProps({
    component: CloseButton,
    props: defaultProps,
    displayName: '@klink-ui/core/CloseButton',
    refType: HTMLButtonElement,
    providerName: 'CloseButton',
  });

  it('sets width and height on CloseIcon based on iconSize prop', () => {
    const { container } = render(<CloseButton iconSize={45} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe(rem(45));
    expect(svg.getAttribute('height')).toBe(rem(45));
  });
});
