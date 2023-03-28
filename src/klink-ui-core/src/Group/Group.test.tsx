import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Group, GroupProps } from './Group';

const defaultProps: GroupProps = {};

describe('@klink-ui/core/Group', () => {
  itRendersChildren(Group, defaultProps);
  itSupportsProviderVariant(Group, defaultProps, 'Group');
  itSupportsSystemProps({
    component: Group,
    props: defaultProps,
    displayName: '@klink-ui/core/Group',
    refType: HTMLDivElement,
  });

  it('has no falsy children', () => {
    const children = [undefined, null, <div key="1" />];
    const { container } = render(<Group>{children}</Group>);
    expect(container.querySelectorAll('.mantine-Group-root > *')).toHaveLength(1);
  });
});
