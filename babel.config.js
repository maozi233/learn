module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    [
      '@babel/plugin-transform-modules-umd',

    ],
    [
      '@babel/plugin-syntax-dynamic-import',
    ],
  ],
};