/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/reduxjs/react-redux/edit/master/website',
          include: [
            '{api,introduction,using-react-redux,tutorials}/*.{md,mdx}',
            'troubleshooting.md',
          ], // no other way to exclude node_modules
        },
        theme: {
          customCss: [
            require.resolve('./static/css/custom.css'),
            require.resolve('./static/css/404.css'),
            require.resolve('./static/css/codeblock.css'),
          ],
        },
      },
    ],
  ],
  title: 'React Redux RU', // Title for your website.
  onBrokenLinks: 'throw',
  tagline: 'Официальная библиотека привязки Redux к React',
  // tagline: 'Official React bindings for Redux',
  url: 'https://ru.react-redux.js.org/', // Your website URL
  baseUrl: '/',
  // Used for publishing and more
  projectName: 'react-redux',
  organizationName: 'reduxjs',

  // For no header links in the top nav bar -> headerLinks: [],
  /* path to images for header/footer */
  favicon: 'img/favicon/favicon.ico',

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/scripts/sidebarScroll.js',
    '/scripts/codeblock.js',
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
  ],
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  customFields: {
    repoUrl: 'https://github.com/reduxjs/react-redux',
  },
  themeConfig: {
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      theme: require('./static/scripts/monokaiTheme.js'),
    },
    image: 'img/redux-logo-landscape.png',
    navbar: {
      title: 'React Redux',
      logo: {
        alt: 'Логотип Redux',
        src: 'img/redux.svg',
      },
      items: [
        {
          to: 'introduction/getting-started',
          label: 'Основы',
          position: 'right',
        },
        {
          to: 'tutorials/quick-start',
          label: 'Введение',
          position: 'right',
        },
        {
          to: 'using-react-redux/connect-mapstate',
          label: 'Использование React Redux',
          position: 'right',
        },
        {
          to: 'api/hooks',
          label: 'Описание API',
          position: 'right'
        },
        {
          href: 'https://github.com/reduxjs/react-redux',
          label: 'GitHub',
          position: 'right',
          className: 'github',
        },
        {
          href: '/introduction/getting-started#help-and-discussion',
          label: 'Нужна помощь?',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Логотип Redux',
        src: 'img/redux_white.svg',
      },
      copyright:
        'Правообладатель (c) с 2015 по настоящее Dan Abramov и авторы документации Redux.',
      links: [
        {
          title: 'Главы',
          items: [
            {
              label: 'Введение',
              to: 'introduction/getting-started',
            },
            {
              label: 'Использование React Redux',
              to: 'using-react-redux/connect-mapstate',
            },
            {
              label: 'Описание API',
              to: 'api/hooks',
            },
            {
              label: 'Руководства',
              to: 'troubleshooting',
            },
          ],
        },
        {
          title: 'Сообщества',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-redux',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/0ZcbPKXt5bZ6au5t',
            },
            {
              label: 'Telegram переводчиков',
              href: 'https://t.me/+E1Kjcjrrip8zZDFi',
            },
          ],
        },
        {
          title: 'Больше',
          items: [
            {
              label: 'GitHub переводчиков',
              href: 'https://github.com/mskKote/react-redux-ru',
            },
            {
              label: 'Оригинальный GitHub',
              href: 'https://github.com/reduxjs/react-redux',
            },
            {
              html: `
                <a
                  class="github-button"
                  href="https://github.com/reduxjs/react-redux"
                  data-icon="octicon-star"
                  data-count-href="/reduxjs/react-redux/stargazers"
                  data-show-count="true"
                  data-count-aria-label="# stargazers on GitHub"
                  aria-label="Star this project on GitHub"
                >
                  Поставить звезду Star
                </a>
              `,
            },
          ],
        },
      ],
    },
    algolia: {
      apiKey: '2d058d216b7fd5d68d481fd48ee72c06',
      indexName: 'react-redux',
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: 'UA-130598673-2',
    },
  },
}

module.exports = siteConfig
