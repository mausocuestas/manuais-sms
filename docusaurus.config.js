// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manuais SMS',
  tagline: 'Manuais são cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manuais-sms.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SMS', // Usually your GitHub org/user name.
  projectName: 'manuais-sms', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        blog: false, // desabilita o plugin do blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // https://stackoverflow.com/questions/60783595/is-there-a-way-to-have-two-docs-in-docusaurus-2/68162605#68162605
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-protocolos',
        path: 'docs-protocolos',
        routeBasePath: 'docs-protocolos',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docs-legis',
          path: 'docs-legis',
          routeBasePath: 'docs-legis',
          sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      announcementBar: {
        id: 'em-construcao', // Increment on change
        content: '🚧 em construção — endereço e hospedagem provisórios 🚧',
        backgroundColor: '#ffb703',
        textColor: '#091E42',
        isCloseable: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manuais',
          },

          {
            to: '/docs-protocolos/intro',  // ./docs-system/Intro.md
            label: 'Protocolos',
            position: 'left',
            activeBaseRegex: `/docs-protocolos/`,
          },

          {
            to: '/docs-legis/intro',  // ./docs-system/Intro.md
            label: 'Legislação',
            position: 'left',
            activeBaseRegex: `/docs-legis/`,
          },
          
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Manuais',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
