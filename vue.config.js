module.exports = {
  runtimeCompiler: true,

  // Disabling Prefetch Hints
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};

// This file is used to enable
// the ability to define templates as strings
