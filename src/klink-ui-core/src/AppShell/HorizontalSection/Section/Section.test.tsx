import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@klink-ui/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps = {
  children: 'test-section',
};

describe('@klink-ui/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);
  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@klink-ui/core/Section',
    refType: HTMLDivElement,
  });
});
