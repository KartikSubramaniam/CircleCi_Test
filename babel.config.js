module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    'module:metro-react-native-babel-preset'
  ],
  plugins: ['@babel/plugin-proposal-export-namespace-from']
}
