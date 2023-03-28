import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { GridProvider } from '../Grid.context';
import { Col, ColProps } from './Col';

const defaultProps: ColProps = {
  span: 12,
};

const TestContainer = createContextContainer(Col, GridProvider, {
  value: {
    gutter: 'md',
    grow: false,
    columns: 12,
  },
});

describe('@klink-ui/core/Col', () => {
  itThrowsContextError(Col, defaultProps, 'Grid component was not found in tree');
  itSupportsProviderVariant(TestContainer, defaultProps, 'Grid', 'col');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@klink-ui/core/Col',
    providerName: 'GridCol',
  });
});
