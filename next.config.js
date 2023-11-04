/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  webpack(config) {
    // Find the Babel loader rule
    const babelRule = config.module.rules.find((rule) => {
      return rule.use && rule.use.loader === 'babel-loader'
    })

    if (babelRule) {
      // Customize Babel options
      babelRule.use.options = {
        configFile: false, // Disable using .babelrc
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.5%, not dead',
              useBuiltIns: 'entry',
              corejs: 3
            }
          ]
          // Add other presets as needed
        ],
        plugins: [
          // Add custom Babel plugins if required
        ]
      }
    }

    return config
  }
}

module.exports = nextConfig
