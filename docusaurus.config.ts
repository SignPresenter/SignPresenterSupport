import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SignPresenter Support',
  tagline: 'Digital signage that just works',
  favicon: 'img/favicon.ico',

  url: 'https://support.signpresenter.com',
  baseUrl: '/',

  staticDirectories: ['static'],

  organizationName: 'SignPresenter',
  projectName: 'SignPresenterSupport',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
        language: ['en'],
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Catch-all for the legacy /topics/ namespace
        createRedirects(existingPath: string) {
          // Auto-generate the no-extension form for every /topics/foo.html redirect we define below
          return undefined;
        },
        redirects: (() => {
          const articleRedirects: { slug: string; to: string }[] = [
            { slug: 'maininstructions', to: '/docs/getting-started/initial-setup' },
            { slug: 'getting-started', to: '/docs/getting-started/first-message' },
            { slug: 'makingmessagesandcategories', to: '/docs/messages/categories' },
            { slug: 'devicessignpresenterworkson', to: '/docs/screens/compatible-devices' },
            { slug: 'verticalsetup', to: '/docs/screens/vertical-setup' },
            { slug: 'payment', to: '/docs/billing/updating-billing-info' },
            { slug: 'support', to: '/docs/troubleshooting/' },
            { slug: 'chirothintv', to: '/docs/screens/chirothintv' },
            { slug: 'departments', to: '/docs/account/departments' },
            { slug: 'screen-mode-differences', to: '/docs/screens/screen-modes' },
            { slug: 'soundboard', to: '/docs/screens/soundboard' },
            { slug: 'offline', to: '/docs/screens/running-offline' },
            { slug: 'whatisamessage', to: '/docs/messages/' },
            { slug: 'add-google-calendar', to: '/docs/integrations/google-calendar' },
            { slug: 'digital-menus', to: '/docs/messages/digital-menus' },
            { slug: 'lessons-dot-church', to: '/docs/integrations/lessons-church' },
            { slug: 'uploadvideos', to: '/docs/messages/uploading-videos' },
            { slug: '3zone-messaging', to: '/docs/playlists/three-zone-messages' },
            { slug: 'directory-and-sinage', to: '/docs/integrations/calendar-feeds' },
            { slug: 'showwebsite', to: '/docs/integrations/show-website' },
            { slug: 'slideshows-function', to: '/docs/integrations/slideshows' },
            { slug: 'limitdates', to: '/docs/playlists/expiring-playlists' },
            { slug: 'weather', to: '/docs/integrations/weather' },
            { slug: 'feeds', to: '/docs/feeds/' },
            { slug: 'canva', to: '/docs/messages/canva' },
            { slug: 'cantpreview', to: '/docs/troubleshooting/cant-preview-videos' },
            { slug: 'other-platforms', to: '/docs/troubleshooting/app-not-in-store' },
            { slug: 'anycountry', to: '/docs/troubleshooting/outside-usa' },
            { slug: 'clear-cache', to: '/docs/troubleshooting/clear-cache' },
            { slug: 'loadingerror', to: '/docs/troubleshooting/loading-instructions' },
            { slug: 'disablestillwatching', to: '/docs/troubleshooting/still-watching' },
            { slug: 'olderfiresticks', to: '/docs/screens/older-firesticks' },
            { slug: 'faq', to: '/docs/faq' },
          ];
          // For each legacy article, generate redirects for both URL forms HubSpot/Jekyll/GitHub
          // Pages might serve: /topics/<slug>.html and /topics/<slug>
          const result: { from: string; to: string }[] = [];
          for (const { slug, to } of articleRedirects) {
            result.push({ from: `/topics/${slug}.html`, to });
            result.push({ from: `/topics/${slug}`, to });
          }
          return result;
        })(),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SignPresenter/SignPresenterSupport/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SignPresenter Support',
      logo: {
        alt: 'SignPresenter',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/troubleshooting/',
          position: 'left',
          label: 'Troubleshooting',
        },
        {
          to: '/docs/faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          href: 'https://signpresenter.com',
          label: 'SignPresenter.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/' },
            { label: 'Messages', to: '/docs/messages/' },
            { label: 'Playlists', to: '/docs/playlists/' },
            { label: 'Screens & Devices', to: '/docs/screens/' },
            { label: 'Troubleshooting', to: '/docs/troubleshooting/' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'SignPresenter.com', href: 'https://signpresenter.com' },
            { label: 'For Churches', href: 'https://signpresenter.com/churches' },
            { label: 'For Restaurants', href: 'https://signpresenter.com/restaurants-cafe' },
            { label: 'For Fitness', href: 'https://signpresenter.com/fitness' },
            { label: 'Pricing & Sign-up', href: 'https://signpresenter.com/#pricing' },
          ],
        },
        {
          title: 'Get help',
          items: [
            { label: 'Email support@signpresenter.com', href: 'mailto:support@signpresenter.com' },
            { label: 'Call or text 918-994-2638', href: 'tel:9189942638' },
            { label: 'Schedule a demo', href: 'https://calendly.com/mike-1021/15-min-screen-share-demo-of-sign-presenter' },
            { label: 'For administrators', to: '/docs/admin/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SignPresenter. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
