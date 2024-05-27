// next.config.mjs
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/nav',
                permanent: false,
            },
            {   // don't redirect when path is nav or contains _ or .
                source: '/:path((?!.*[._]|nav).*)',
                destination: 'https://go.cos.tg/:path',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
