var config = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["react-hot-loader/babel", "@babel/plugin-transform-runtime"]
}

if (process.env.BABEL_ENV === 'test') {
  config.plugins.push("istanbul");
}

module.exports = config;
