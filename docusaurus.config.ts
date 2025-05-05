import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const title = './index';
const tagline = 'Links, tendências e ferramentas para devs front-end, todo mês!';
const copyright = `© ${new Date().getFullYear()} Magno Biét.`;
const language = 'pt-BR';

const config: Config = {
  title,
  tagline,
  favicon: 'https://favicon.magnobiet.com/e/📰',
  url: 'https://newsletter.magnobiet.com',
  baseUrl: '/',
  organizationName: 'magnobiet',
  projectName: 'newsletter',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: language,
    locales: [language],
    localeConfigs: {
      [language]: {
        label: 'Português (Brasil)',
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Newsletter',
          blogSidebarTitle: 'Arquivo',
          path: 'newsletter',
          routeBasePath: '/archive',
          showReadingTime: true,
          postsPerPage: 12,
          feedOptions: {
            title,
            description: tagline,
            type: ['rss', 'atom'],
            xslt: true,
            copyright,
            language,
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
        {
          to: '/archive',
          label: 'Arquivo',
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'light',
      copyright
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
