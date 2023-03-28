import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Aside, AsideProps } from './Aside';
import { Section } from '../HorizontalSection/Section/Section';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('@klink-ui/core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsProviderVariant(Aside, defaultProps, 'Aside');
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: '@klink-ui/core/Aside',
    refType: HTMLElement,
    providerName: 'Aside',
  });

  it('exposes Section as Aside.Section', () => {
    expect(Aside.Section).toBe(Section);
  });
});
