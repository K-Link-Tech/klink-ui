import React from 'react';
import { Global } from '@emotion/react';
import type { MantineTheme, MantineSize } from './types';
import { rem } from './utils';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<MantineSize, number | string>,
  name: string
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--klink-ui-${name}-${size}`] = rem(sizes[size]);
  });
}

export function MantineCssVariables({ theme }: { theme: MantineTheme }) {
  const variables: Record<string, string> = {
    '--klink-ui-color-white': theme.white,
    '--klink-ui-color-black': theme.black,
    '--klink-ui-transition-timing-function': theme.transitionTimingFunction,
    '--klink-ui-line-height': `${theme.lineHeight}`,
    '--klink-ui-font-family': theme.fontFamily,
    '--klink-ui-font-family-monospace': theme.fontFamilyMonospace,
    '--klink-ui-font-family-headings': theme.headings.fontFamily,
    '--klink-ui-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--klink-ui-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--klink-ui-${heading}-font-size`] = headings[heading].fontSize;
    variables[`--klink-ui-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
