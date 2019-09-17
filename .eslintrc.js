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
    "airbnb"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react":2,
    "react/jsx-uses-vars":2,
    "react/react-in-jsx-scope":2,
    "indent": [
    "error",
    "tab"
    ],
    "linebreak-style": [
    "error",
    "windows"
    ],
    "quotes": [
    "error",
    "single"
    ],
    "semi": [
    "error",
    "always"
    ],
    "react/jsx-indent": [ // 解决react里面的缩进问题
    "error",
    "tab"
    ],
    "react/jsx-indent-props": [ //
    "error",
    "tab"
    ],
    "no-tabs": "off", // 禁止缩进错误
    // 允许使用 for in
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    // 允许在 .js 和 .jsx 文件中使用 jsx
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    // 不区分是否是 无状态组件
    "react/prefer-stateless-function": 0
    }
    
};
