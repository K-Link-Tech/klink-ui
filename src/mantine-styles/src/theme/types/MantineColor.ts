import { Tuple } from './Tuple';

export type DefaultMantineColor =
  | 'dark'
  | 'gray'
  | 'primary'
  | 'error'
  | 'success'
  | 'warning'
  | 'blue_gray'
  | 'blue_light'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'rose'
  | 'orange'
  | (string & {});

export type MantineThemeColorsOverride = {};

export type MantineThemeColors = MantineThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultMantineColor, Tuple<string, 10>>;

export type MantineColor = keyof MantineThemeColors;
