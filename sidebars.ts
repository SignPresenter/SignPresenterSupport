import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        'getting-started/create-account',
        'getting-started/initial-setup',
        'getting-started/first-message',
        'getting-started/resetting-password',
      ],
    },
    {
      type: 'category',
      label: 'Messages',
      link: { type: 'doc', id: 'messages/index' },
      items: [
        'messages/editing-a-message',
        'messages/categories',
        'messages/uploading-videos',
        'messages/canva',
        'messages/digital-menus',
      ],
    },
    {
      type: 'category',
      label: 'Playlists',
      link: { type: 'doc', id: 'playlists/index' },
      items: [
        'playlists/editing-a-playlist',
        'playlists/three-zone-messages',
        'playlists/expiring-playlists',
      ],
    },
    {
      type: 'category',
      label: 'Screens & Devices',
      link: { type: 'doc', id: 'screens/index' },
      items: [
        'screens/screen-settings',
        'screens/compatible-devices',
        'screens/vertical-setup',
        'screens/screen-modes',
        'screens/the-tv-app',
        'screens/cache-and-sync',
        'screens/soundboard',
        'screens/running-offline',
        'screens/older-firesticks',
        'screens/chirothintv',
      ],
    },
    {
      type: 'category',
      label: 'Schedules',
      link: { type: 'doc', id: 'schedules/index' },
      items: [
        'schedules/recurring-weekly',
        'schedules/date-range-and-weights',
      ],
    },
    {
      type: 'category',
      label: 'Account & Departments',
      link: { type: 'doc', id: 'account/index' },
      items: [
        'account/settings-overview',
        'account/inviting-users',
        'account/profile',
        'account/departments',
      ],
    },
    {
      type: 'category',
      label: 'Subscribing to Feeds',
      link: { type: 'doc', id: 'feeds/index' },
      items: [
        'feeds/feed-detail',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'integrations/index' },
      items: [
        'integrations/google-calendar',
        'integrations/lessons-church',
        'integrations/calendar-feeds',
        'integrations/show-website',
        'integrations/slideshows',
        'integrations/weather',
      ],
    },
    {
      type: 'category',
      label: 'Billing & Payment',
      link: { type: 'doc', id: 'billing/index' },
      items: [
        'billing/updating-billing-info',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: { type: 'doc', id: 'troubleshooting/index' },
      items: [
        'troubleshooting/cant-preview-videos',
        'troubleshooting/app-not-in-store',
        'troubleshooting/outside-usa',
        'troubleshooting/clear-cache',
        'troubleshooting/loading-instructions',
        'troubleshooting/still-watching',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],

  adminSidebar: [
    {
      type: 'doc',
      id: 'admin/index',
      label: 'Admin Overview',
    },
    {
      type: 'category',
      label: 'Custom Templates',
      link: { type: 'doc', id: 'admin/templates/index' },
      items: [
        'admin/templates/editing-a-template',
        'admin/templates/anatomy',
        'admin/templates/variables-and-questions',
        'admin/templates/lifecycle-hooks',
        'admin/templates/overlay-templates',
        'admin/templates/template-cookbook',
      ],
    },
    {
      type: 'category',
      label: 'Public Feeds',
      link: { type: 'doc', id: 'admin/feeds/index' },
      items: [
        'admin/feeds/editing-a-feed',
        'admin/feeds/concepts',
        'admin/feeds/subscriber-questions',
        'admin/feeds/pricing-and-trials',
        'admin/feeds/external-data-sources',
        'admin/feeds/provider-integrations',
      ],
    },
    {
      type: 'category',
      label: 'Admin Dashboard',
      link: { type: 'doc', id: 'admin/admin-dashboard' },
      items: [
        'admin/managing-accounts',
        'admin/managing-users',
        'admin/support-tickets',
      ],
    },
    {
      type: 'category',
      label: 'Affiliate & Commissions',
      link: { type: 'doc', id: 'admin/affiliate' },
      items: [
        'admin/affiliate-setup',
        'admin/commission-check',
      ],
    },
  ],
};

export default sidebars;
