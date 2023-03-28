import React from 'react';
import { Link } from 'gatsby';
import { rem } from '@klink-ui/core';
import { MantineLogo, MantineLogoProps } from '@klink-ui/ds';
import useStyles from './Logo.styles';

export function Logo(props: MantineLogoProps) {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Mantine">
      <MantineLogo size={rem(30)} {...props} />
    </Link>
  );
}
