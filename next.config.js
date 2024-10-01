const nextConfig = {
    transpilePackages: [ 'lodash-es','@ant-design/pro-components/lib'],
    output: 'export',images:{
    unoptimized:true},
    webpack: (config, { isServer }) => {
        return config;
      }
}

export default nextConfig