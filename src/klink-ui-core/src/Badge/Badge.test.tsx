import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {};

describe('@klink-ui/core/Badge', () => {
  itRendersChildren(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsProviderVariant(Badge, defaultProps, 'Badge');
  itSupportsProviderSize(Badge, defaultProps, 'Badge');
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@klink-ui/core/Badge',
    refType: HTMLDivElement,
  });

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(container.querySelector('.klink-ui-Badge-rightSection').textContent).toBe('test-right');
    expect(container.querySelector('.klink-ui-Badge-leftSection').textContent).toBe('test-left');
  });
});
