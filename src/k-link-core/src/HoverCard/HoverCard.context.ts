import { createSafeContext } from '@k-link/utils';
import { HOVER_CARD_ERRORS } from './HoverCard.errors';

interface HoverCardContext {
  openDropdown(): void;
  closeDropdown(): void;
}

export const [HoverCardContextProvider, useHoverCardContext] = createSafeContext<HoverCardContext>(
  HOVER_CARD_ERRORS.context
);
