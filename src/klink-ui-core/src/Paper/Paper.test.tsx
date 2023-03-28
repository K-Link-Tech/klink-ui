import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps = {};

describe('@klink-ui/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsProviderVariant(Paper, defaultProps, 'Paper');
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@klink-ui/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  });
});
