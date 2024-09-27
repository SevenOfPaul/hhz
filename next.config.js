import postGames from "./functions/games.js"
const nextConfig = {
    transpilePackages: [ 'lodash-es','@ant-design/pro-components/lib'],
    output: 'export',images:{
    unoptimized:true},
    webpack: (config, { isServer }) => {
        postGames()
    
        return config;
      }
}

export default nextConfig