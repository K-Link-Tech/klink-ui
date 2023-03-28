import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/klink-ui-core/src/Tabs/TabsList/TabsList.tsx',
  '../src/klink-ui-core/src/Tabs/Tab/Tab.tsx',
  '../src/klink-ui-core/src/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/klink-ui-core/src/Tabs/Tabs.tsx',

  // Accordion
  '../src/klink-ui-core/src/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/klink-ui-core/src/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/klink-ui-core/src/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/klink-ui-core/src/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/klink-ui-core/src/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/klink-ui-core/src/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/klink-ui-core/src/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // HoverCard
  '../src/klink-ui-core/src/HoverCard/HoverCardTarget/HoverCardTarget.tsx',
  '../src/klink-ui-core/src/HoverCard/HoverCardDropdown/HoverCardDropdown.tsx',

  // Menu
  '../src/klink-ui-core/src/Menu/MenuTarget/MenuTarget.tsx',
  '../src/klink-ui-core/src/Menu/MenuDropdown/MenuDropdown.tsx',
  '../src/klink-ui-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/klink-ui-core/src/Menu/MenuLabel/MenuLabel.tsx',

  // Input
  '../src/klink-ui-core/src/Input/InputLabel/InputLabel.tsx',
  '../src/klink-ui-core/src/Input/InputWrapper/InputWrapper.tsx',
  '../src/klink-ui-core/src/Input/InputDescription/InputDescription.tsx',
  '../src/klink-ui-core/src/Input/InputError/InputError.tsx',

  // List
  '../src/klink-ui-core/src/List/ListItem/ListItem.tsx',

  // Avatar
  '../src/klink-ui-core/src/Avatar/AvatarGroup/AvatarGroup.tsx',

  // Checkbox
  '../src/klink-ui-core/src/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Switch
  '../src/klink-ui-core/src/Switch/SwitchGroup/SwitchGroup.tsx',

  // Radio
  '../src/klink-ui-core/src/Radio/RadioGroup/RadioGroup.tsx',

  // Chip
  '../src/klink-ui-core/src/Chip/ChipGroup/ChipGroup.tsx',

  // Grid
  '../src/klink-ui-core/src/Grid/Col/Col.tsx',

  // Button
  '../src/klink-ui-core/src/Button/ButtonGroup/ButtonGroup.tsx',

  // Timeline
  '../src/klink-ui-core/src/Timeline/TimelineItem/TimelineItem.tsx',

  // Slider
  '../src/klink-ui-core/src/Slider/Slider/Slider.tsx',
  '../src/klink-ui-core/src/Slider/RangeSlider/RangeSlider.tsx',

  // AppShell
  '../src/klink-ui-core/src/AppShell/Navbar/Navbar.tsx',
  '../src/klink-ui-core/src/AppShell/Header/Header.tsx',
  '../src/klink-ui-core/src/AppShell/Footer/Footer.tsx',
  '../src/klink-ui-core/src/AppShell/Aside/Aside.tsx',

  // Stepper
  '../src/klink-ui-core/src/Stepper/Step/Step.tsx',

  // Pagination
  '../src/klink-ui-core/src/Pagination/PaginationRoot/PaginationRoot.tsx',
  '../src/klink-ui-core/src/Pagination/PaginationItems/PaginationItems.tsx',

  // Carousel
  '../src/klink-ui-carousel/src/Carousel.tsx',
  '../src/klink-ui-carousel/src/CarouselSlide/CarouselSlide.tsx',

  // Other
  '../src/klink-ui-notifications/src/Notifications/Notifications.tsx',
  '../src/klink-ui-prism/src/Prism/Prism.tsx',
  '../src/klink-ui-spotlight/src/SpotlightProvider.tsx',
  '../src/klink-ui-modals/src/ModalsProvider.tsx',
  '../src/klink-ui-tiptap/src/RichTextEditor.tsx',
  '../src/klink-ui-nprogress/src/NavigationProgress.tsx',
  '../src/klink-ui-dropzone/src/Dropzone.tsx',
  '../src/klink-ui-dropzone/src/DropzoneFullScreen.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/klink-ui-core/src') },
  { type: 'package', path: path.join(__dirname, '../src/klink-ui-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/klink-ui-dropzone/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
