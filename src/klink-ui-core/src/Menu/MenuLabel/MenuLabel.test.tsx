import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@klink-ui/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true });

describe('@klink-ui/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
