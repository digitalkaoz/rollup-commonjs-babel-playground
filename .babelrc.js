module.exports = {
    plugins: [
        "transform-object-rest-spread",
        "@babel/plugin-external-helpers"
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          debug: true,
          modules: false,
          useBuiltIns: "usage",
          targets: {
            browsers: ["safari >= 11"]
          }
        }
      ]
    ]
  };