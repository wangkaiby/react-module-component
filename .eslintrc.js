module.exports = {
  "root": true,
  // "extends": [
  //   "plugin:vue/strongly-recommended",
  // ],
  // "parserOptions": {
  //   "parser": "babel-eslint"
  // }
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 7,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true,
    "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
      "jsx": true
    }
  },
  "extends": [
    "airbnb",
    'plugin:react/recommended',

  ],
  "plugins": [
    "react"
  ],
  "rules": {
    'import/prefer-default-export': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': 0, // TODO: remove later
    'consistent-return': 0, // TODO: remove later
    'no-return-assign': 0, // TODO: remove later
    'no-param-reassign': 0, // TODO: remove later
    'react/destructuring-assignment': 0, // TODO: remove later
    'react/no-did-update-set-state': 0, // TODO: remove later
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'import/no-cycle': 0,
    'react/no-find-dom-node': 0,
    'no-underscore-dangle': 0,
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,
    // for (let i = 0; i < len; i++)
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 0,
    'react/display-name': 0,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    'react/static-property-placement': 0,
  }
};
