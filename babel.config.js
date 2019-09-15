module.exports = function(api) {
  api.cache(true);

  const presets = ["module:metro-react-native-babel-preset"];
  const plugins = [];

  if (!process.env["ENV"] === "test") {
    plugins.push([
      "jsx-remove-data-test-id",
      {
        attributes: "testID",
      },
    ]);
  }

  return {
    plugins,
    presets,
  };
};
