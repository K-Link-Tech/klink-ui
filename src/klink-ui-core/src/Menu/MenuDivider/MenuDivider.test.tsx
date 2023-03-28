import { itSupportsSystemProps, createContextContainer } from '@klink-ui/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true });

describe('@klink-ui/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
