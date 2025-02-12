import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// logging: {
	// 	fetches: {
	// 		fullUrl: true,
	// 	},
	// },

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				search: '',
			},
		],
	},
};

export default nextConfig;
