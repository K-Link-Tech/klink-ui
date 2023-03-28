import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itHandlesBooleanState,
  itSupportsFocusEvents,
  itSupportsProviderSize,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Chip, ChipProps } from './Chip';

const defaultProps: ChipProps = {
  value: 'test-value',
  children: 'test-chip',
};

describe('@klink-ui/core/Chip', () => {
  checkAccessibility([<Chip {...defaultProps} />]);
  itRendersChildren(Chip, defaultProps);
  itSupportsProviderSize(Chip, defaultProps, 'Chip');
  itSupportsProviderVariant(Chip, defaultProps, 'Chip');
  itConnectsLabelAndInput(Chip, defaultProps);
  itSupportsWrapperProps(Chip, defaultProps);
  itHandlesBooleanState(Chip, defaultProps);
  itSupportsFocusEvents(Chip, defaultProps, 'input');
  itSupportsSystemProps({
    component: Chip,
    props: defaultProps,
    displayName: '@klink-ui/core/Chip',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Chip',
  });

  it('displays checked icon when input is checked', () => {
    const { container: checked } = render(<Chip {...defaultProps} checked />);
    const { container: notChecked } = render(<Chip {...defaultProps} checked={false} />);
    expect(checked.querySelectorAll('.klink-ui-Chip-checkIcon')).toHaveLength(1);
    expect(notChecked.querySelectorAll('.klink-ui-Chip-checkIcon')).toHaveLength(0);
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Chip {...defaultProps} disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('changes input type based on prop', () => {
    render(<Chip {...defaultProps} type="radio" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
});