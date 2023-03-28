import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@klink-ui/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsProviderVariant(Title, defaultProps, 'Title');
  itSupportsProviderSize(Title, defaultProps, 'Title');
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@klink-ui/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  });
});
