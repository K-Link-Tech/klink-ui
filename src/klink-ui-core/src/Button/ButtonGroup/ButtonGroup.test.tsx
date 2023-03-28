import { itSupportsSystemProps, itRendersChildren } from '@klink-ui/tests';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@klink-ui/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
