import { MantineTheme, getSize } from '@klink-ui/styles';

export function getFontSizeValue(size: any, theme: MantineTheme) {
  return getSize({ size, sizes: theme.fontSizes });
}
