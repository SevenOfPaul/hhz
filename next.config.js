
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const nextConfig = {
    transpilePackages: [ 'lodash-es','@ant-design/pro-components/lib'],
    output: 'export',images:{
    unoptimized:true,
    // module: {
    //     rules: [{ test: /\.html$/, use: 'raw-loader' }],
    //   },
    //   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}

}

export default nextConfig