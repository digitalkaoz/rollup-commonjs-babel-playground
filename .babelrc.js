module.exports = {
    plugins: [
        "transform-object-rest-spread"
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          debug: true,
          modules: false,
          useBuiltIns: "usage",
          targets: {
            browsers: ["last 2 major versions"]
          }
        }
      ]
    ]
  };