import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps = {};

describe('@klink-ui/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsProviderVariant(CardSection, defaultProps, 'Card', 'cardSection');
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@klink-ui/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  });
});
