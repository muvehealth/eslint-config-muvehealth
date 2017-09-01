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
    "no-var": 0,
    "no-param-reassign": 0,
    "one-var": [2, { "var": "always" }],
    "one-var-declaration-per-line": [2, "initializations"],
    // semi: 0
    // 'no-alert': 2,
    // 'no-console': 2,
    "react/jsx-filename-extension": 0,
    // 'react/jsx-filename-extension': [
    //   1,
    //   {
    //     extensions: [
    //       '.js',
    //       '.jsx'
    //     ]
    //   }
    // ],
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
