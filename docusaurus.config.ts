import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: './index',
  tagline: 'Links, tendências e ferramentas para devs front-end, todo mês!',
  favicon: 'https://favicon.magnobiet.com/e/📰',
  url: 'https://newsletter.magnobiet.com',
  baseUrl: '/',
  organizationName: 'magnobiet',
  projectName: 'newsletter',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
    localeConfigs: {
      'pt-br': {
        label: 'Português (Brasil)',
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: 'newsletter',
          routeBasePath: '/archive',
          showReadingTime: true,
          postsPerPage: 12,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: './index newsletter',
      logo: {
        alt: 'Newsletter Logo',
        src: 'https://favicon.magnobiet.com/e/📰',
      },
      items: [
        { to: '/archive', label: 'Arquivo', position: 'left' },
        {
          href: 'https://github.com/magnobiet/newsletter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Magno Biét.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
