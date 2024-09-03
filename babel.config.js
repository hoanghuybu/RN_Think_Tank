module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      "module-resolver",      
      {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
          "@store": "./src/store",
          "@function": "./src/functions"
        }
      }
    ],
    "react-native-reanimated/plugin",
  ]
  };
};
