import { createStyles, rem, getSize } from '@klink-ui/styles';

export default createStyles((theme, _params, { size }) => ({
  error: {
    wordBreak: 'break-word',
    color: theme.fn.variant({ variant: 'filled', color: 'error' }).background,
    fontSize: `calc(${getSize({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
    lineHeight: 1.2,
    display: 'block',
  },
}));
