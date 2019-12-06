module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './',
        rootPathPrefix: '/',
      },
    ],
  ];
  // const env = {
  //   development: {
  //     plugins: ['transform-react-jsx-source'],
  //   },
  // };

  return {
    presets,
    // env,
    plugins,
  };
};
