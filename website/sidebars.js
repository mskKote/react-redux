module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Основы',
      collapsed: false,
      items: [
        'introduction/getting-started',
        'introduction/why-use-react-redux',
      ],
    },
    {
      type: 'category',
      label: 'Введение',
      collapsed: false,
      items: [
        'tutorials/quick-start',
        'tutorials/typescript-quick-start',
        'tutorials/connect',
      ],
    },
    {
      type: 'category',
      label: 'Использование React Redux',
      collapsed: false,
      items: [
        'using-react-redux/usage-with-typescript',
        'using-react-redux/connect-mapstate',
        'using-react-redux/connect-mapdispatch',
        'using-react-redux/accessing-store',
      ],
    },
    {
      type: 'category',
      label: 'Описание API',
      items: ['api/provider', 'api/hooks', 'api/connect', 'api/batch'],
    },
    {
      type: 'category',
      label: 'Руководства',
      items: ['troubleshooting'],
    },
  ],
}
