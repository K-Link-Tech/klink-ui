import type { MantineTheme } from '@k-link/core';

export function getGradient(theme: MantineTheme, variant: 'text' | 'bg') {
  if (variant === 'text') {
    return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]} 3%, ${
      theme.colors.blue_light[theme.colorScheme === 'dark' ? 4 : 5]
    } 97%)`;
  }

  return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 7 : 7]} 3%, ${
    theme.colors.blue_light[theme.colorScheme === 'dark' ? 7 : 5]
  } 97%)`;
}
