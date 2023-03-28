import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itRendersChildren,
} from '@klink-ui/tests';
import { HoverCardDropdown, HoverCardDropdownProps } from './HoverCardDropdown';
import { HoverCard } from '../HoverCard';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';

const defaultProps: HoverCardDropdownProps = {};

const TestContainer = createContextContainer(HoverCardDropdown, HoverCard, {
  initiallyOpened: true,
});

describe('@klink-ui/core/HoverCardDropdown', () => {
  itThrowsContextError(HoverCardDropdown, defaultProps, HOVER_CARD_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@klink-ui/core/HoverCardDropdown',
    providerName: 'HoverCardDropdown',
  });
});
