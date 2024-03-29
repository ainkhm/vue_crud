// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/base.js'
      }
    }
  },
  // Setup globals vars
  globals: {
    Foundation: false,
    jQuery: false,
    $: false,
    test: false,
    fixture: false,
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      vue: 'never',
    }],
    'max-len': ["error", { "code": 200 }],
    'import/no-unresolved': [0, { commonjs: true, amd: true }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    // custom project rules
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'object-shorthand': ["error", "always", { "avoidQuotes": false }],
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'vue/require-default-prop': 0,
  // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
