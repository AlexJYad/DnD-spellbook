module.exports = function override(config, env) {
   config.module.rules.push({
      test: /\.html$/,
      use: [
         {
            loader: "html-loader",
         },
      ],
   });
   return config;
};
