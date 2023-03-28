import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@klink-ui/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#fff',
};

describe('@klink-ui/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps);
  itSupportsProviderVariant(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsProviderSize(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@klink-ui/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  });
});
