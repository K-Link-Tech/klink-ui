import React from 'react';
import { itSupportsSystemProps } from '@klink-ui/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
  variant: '',
};

describe('@klink-ui/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@klink-ui/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
