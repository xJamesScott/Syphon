module.exports = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    }
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback.fs = false
    //     }

    //     return config
    // },
    // future: {
    //     webpack5: true,
    // },
    // fallback: {
    //     fs: false,
    // },
}