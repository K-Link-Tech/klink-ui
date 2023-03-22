import React, { useEffect, useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
  MantineGradient,
  Variants,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { AvatarPlaceholderIcon, AvatarAddIcon } from './AvatarIcon';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context';
import useStyles, { AvatarStylesParams } from './Avatar.styles';
import { Box } from '../Box';

export type AvatarStylesNames = Selectors<typeof useStyles>;

export interface AvatarProps extends DefaultProps<AvatarStylesNames, AvatarStylesParams> {
  /** is add Icon avatar or normal image avatar */
  isAddAvatar?: boolean;

  /** Image url */
  src?: string | null;

  /** Image alt text or title for placeholder variant */
  alt?: string;

  /** Avatar width and height */
  size?: MantineNumberSize | '2xl';

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Controls appearance */
  variant?: Variants<'filled' | 'light' | 'gradient' | 'outline'>;

  /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
  gradient?: MantineGradient;

  /** <img /> element attributes */
  imageProps?: Record<string, any>;

  /** Custom placeholder */
  children?: React.ReactNode;
}

const defaultProps: Partial<AvatarProps> = {
  size: 'md',
  color: 'gray',
  variant: 'light',
  isAddAvatar: false,
};

export const _Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    isAddAvatar,
    size,
    src,
    alt,
    radius,
    children,
    color,
    variant,
    gradient,
    classNames,
    styles,
    imageProps,
    unstyled,
    ...others
  } = useComponentDefaultProps('Avatar', defaultProps, props);

  const ctx = useAvatarGroupContext();
  const [error, setError] = useState(!src);

  const { classes, cx } = useStyles(
    { color, radius, withinGroup: ctx.withinGroup, spacing: ctx.spacing, gradient },
    { classNames, styles, unstyled, name: 'Avatar', variant, size }
  );

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <Box component="div" className={cx(classes.root, className)} ref={ref} {...others}>
      {!isAddAvatar ? (
        error ? (
          <div className={classes.placeholder} title={alt}>
            {children || <AvatarPlaceholderIcon className={classes.placeholderIcon} />}
          </div>
        ) : (
          <img
            {...imageProps}
            className={classes.image}
            src={src}
            alt={alt}
            onError={() => setError(true)}
          />
        )
      ) : (
        <div className={classes.placeholder}>
          <AvatarAddIcon className={classes.addIcon} />
        </div>
      )}
    </Box>
  );
}) as any;

_Avatar.displayName = '@mantine/core/Avatar';
_Avatar.Group = AvatarGroup;

export const Avatar = createPolymorphicComponent<'div', AvatarProps, { Group: typeof AvatarGroup }>(
  _Avatar
);
