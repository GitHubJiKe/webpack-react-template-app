module.exports = {
  parser: "postcss-comment",
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    cssnano: {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
