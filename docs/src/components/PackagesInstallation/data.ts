export const PACKAGES_DATA = [
  {
    package: '@klink-ui/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@klink-ui/hooks'],
  },
  {
    package: '@klink-ui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core'],
  },
  {
    package: '@klink-ui/form',
    description: 'Form management library',
    dependencies: ['@klink-ui/form'],
  },
  {
    package: '@klink-ui/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/dates', 'dayjs'],
  },
  {
    package: '@klink-ui/notifications',
    description: 'Notifications system',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/notifications'],
  },
  {
    package: '@klink-ui/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/prism'],
  },
  {
    package: '@klink-ui/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@klink-ui/hooks',
      '@klink-ui/core',
      '@klink-ui/tiptap',
      '@tabler/icons-react@1.119.0',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@klink-ui/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/dropzone'],
  },
  {
    package: '@klink-ui/carousel',
    description: 'Embla based carousel component',
    dependencies: [
      '@klink-ui/hooks',
      '@klink-ui/core',
      '@klink-ui/carousel',
      'embla-carousel-react',
    ],
  },
  {
    package: '@klink-ui/spotlight',
    description: 'Overlay command center',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/spotlight'],
  },
  {
    package: '@klink-ui/modals',
    description: 'Centralized modals manager',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/modals'],
  },
  {
    package: '@klink-ui/nprogress',
    description: 'Navigation progress',
    dependencies: ['@klink-ui/hooks', '@klink-ui/core', '@klink-ui/nprogress'],
  },
];
