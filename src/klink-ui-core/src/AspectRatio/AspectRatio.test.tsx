import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@klink-ui/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@klink-ui/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsProviderVariant(AspectRatio, defaultProps, 'AspectRatio');
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@klink-ui/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  });
});
