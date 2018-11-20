
module.exports = {
  "presets": [
    require("@babel/preset-env").default,
    require("@babel/preset-typescript").default,
    require("@babel/preset-react").default
  ],
  "plugins": [
    require("@babel/plugin-proposal-class-properties").default,
    require("@babel/plugin-proposal-object-rest-spread").default
  ],
  "env": {
    "test": {
      "plugins": [
        require("babel-plugin-istanbul").default
      ]
    }
  }
};
