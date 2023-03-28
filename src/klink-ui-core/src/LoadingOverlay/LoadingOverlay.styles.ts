import { createStyles } from '@klink-ui/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.cover(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));
