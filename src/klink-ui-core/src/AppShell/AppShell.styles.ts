import {
  createStyles,
  MantineNumberSize,
  MantineTheme,
  CSSObject,
  getSize,
  getBreakpointValue,
  em,
} from '@klink-ui/styles';

export interface AppShellStylesParams {
  padding: MantineNumberSize;
  fixed: boolean;
  navbarOffsetBreakpoint: MantineNumberSize;
  asideOffsetBreakpoint: MantineNumberSize;
}

function getPositionStyles(props: AppShellStylesParams, theme: MantineTheme): CSSObject {
  const padding = getSize({ size: props.padding, sizes: theme.spacing });

  const navbarOffset = props.navbarOffsetBreakpoint
    ? getSize({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  const asideOffset = props.asideOffsetBreakpoint
    ? getSize({ size: props.asideOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  if (!props.fixed) {
    return { padding };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(var(--klink-ui-header-height, 0px) + ${padding})`,
    paddingBottom: `calc(var(--klink-ui-footer-height, 0px) + ${padding})`,
    paddingLeft: `calc(var(--klink-ui-navbar-width, 0px) + ${padding})`,
    paddingRight: `calc(var(--klink-ui-aside-width, 0px) + ${padding})`,

    [`@media (max-width: ${em(getBreakpointValue(navbarOffset) - 1)})`]: {
      paddingLeft: padding,
    },

    [`@media (max-width: ${em(getBreakpointValue(asideOffset) - 1)})`]: {
      paddingRight: padding,
    },
  };
}

export default createStyles((theme, props: AppShellStylesParams) => ({
  root: {
    boxSizing: 'border-box',
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
  },

  main: {
    flex: 1,
    width: '100vw',
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
