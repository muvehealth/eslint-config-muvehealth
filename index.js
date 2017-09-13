module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    "flowtype"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    "semi": 0,
    'no-alert': 2,
    'no-console': 2,
    "react/jsx-filename-extension": 0,
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ]
  }
}
