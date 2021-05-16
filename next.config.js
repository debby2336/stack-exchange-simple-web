const withBundleAnalyzer = (nextConfig) =>
  require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true' ? true : false
  })(nextConfig)

module.exports = withBundleAnalyzer({
  poweredByHeader: false
})
