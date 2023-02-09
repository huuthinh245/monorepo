module.exports = function (api) {
  api.cache(true);
  let plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@utils': '@my-app/mobile/utils',
          '@components': '@my-app/mobile/src/component',
        },
      },
    ],
  ];
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: plugins,
      },
      development: {
        plugins: plugins,
      },
    },
  };
};
