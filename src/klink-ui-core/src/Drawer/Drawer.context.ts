import { createSafeContext } from '@klink-ui/utils';

export type ScrollAreaComponent = React.FC<{
  mah: React.CSSProperties['maxHeight'];
  children: React.ReactNode;
}>;

interface DrawerContext {
  scrollAreaComponent: ScrollAreaComponent;
}

export const [DrawerProvider, useDrawerContext] = createSafeContext<DrawerContext>(
  'Drawer component was not found in tree'
);
