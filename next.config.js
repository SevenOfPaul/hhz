const nextConfig = {
    transpilePackages: [ 'lodash-es','@ant-design/pro-components/lib'],
    images:{
    unoptimized:true},
    webpack: (config, { isServer }) => {
        return config;
      }
}

export default nextConfig
