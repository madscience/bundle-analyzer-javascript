import BundleAnalyzerPlugin from '@madsci/bundle-analyzer-webpack-plugin'

exports.onCreateWebpackConfig = ({ actions }, options) => {
  actions.setWebpackConfig({
    plugins: [new BundleAnalyzerPlugin(options)],
  })
}
