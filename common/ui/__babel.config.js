module.exports = {
  presets: [
    [
      "@babel/preset-react",
      "@babel/preset-typescript",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};