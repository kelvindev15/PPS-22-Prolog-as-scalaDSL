// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prolog as Scala DSL',
  tagline: 'Logic programming on the fly',
  favicon: 'img/logos/PaS_BOW.png',

  // Set the production url of your site here
  url: 'https://kelvin-olaiya.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PPS-22-Prolog-as-scalaDSL/',
  // baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kelvin-olaiya', // Usually your GitHub org/user name.
  projectName: 'PPS-22-Prolog-as-ScalaDSL', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logos/Prolog_as_scalaDSL_BOW.png',
      navbar: {
        title: 'PPS-22-Prolog-as-ScalaDSL',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logos/PaS_WOB.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentazione',
          },
          {
            href: "/api/",
            label: "Scaladoc",
            position: "right",
            target: "_blank"
          },
          {
            href: 'https://github.com/kelvindev15/PPS-22-Prolog-as-ScalaDSL',
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
                label: 'Documentazione',
                to: '/docs/category/documentazione',
              },
            ],
          },
          {
            title: 'Miscellaneous',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/kelvin-olaiya/',
              },
              {
                label: 'Project repository',
                href: 'https://github.com/kelvindev15/PPS-22-Prolog-as-ScalaDSL',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Prolog-as-ScalaDSL`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['scala'],
      },
    }),
};

module.exports = config;
