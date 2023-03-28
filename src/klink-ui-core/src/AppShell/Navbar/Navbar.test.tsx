import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Navbar, NavbarProps } from './Navbar';
import { Section } from '../HorizontalSection/Section/Section';

const defaultProps: NavbarProps = { children: 'test-navbar' };

describe('@klink-ui/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsProviderVariant(Navbar, defaultProps, 'Navbar');
  itSupportsSystemProps({
    component: Navbar,
    props: defaultProps,
    displayName: '@klink-ui/core/Navbar',
    refType: HTMLElement,
    providerName: 'Navbar',
  });

  it('exposes Section as Navbar.Section', () => {
    expect(Navbar.Section).toBe(Section);
  });
});
