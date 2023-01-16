/* config-overrides.js */
module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config) {
    return {
      ...config,
      ignoreWarnings: [
        {
          // Change this to fit your needs
          module: /node_modules\/@capacitor-community/,
        },
      ],
    };
  },
};
