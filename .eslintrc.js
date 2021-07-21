const isProduction = process.env.NODE_ENV === 'production'

const productionCfg = {}

const developmentCfg = {
  extends: [],

  rules: {}
}

const commonCfg = {
  root: true,

  env: {
    node: true,
    browser: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  rules: {
    'no-console': isProduction ? 'warn' : 'off',
    'no-debugger': isProduction ? 'warn' : 'off'
  }
}

function environmentByCfg () {
  if (isProduction) {
    return Object.assign(commonCfg, productionCfg)
  }
  return Object.assign(commonCfg, developmentCfg)
}

module.exports = environmentByCfg()
