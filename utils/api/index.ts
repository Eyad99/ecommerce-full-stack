/* eslint-disable @typescript-eslint/no-explicit-any */

// const baseURL = 'http://127.0.0.1:3000/api/';
const baseURL = 'https://ecommerce-full-stack-nine.vercel.app/api/';

export interface ApiResponse<T = any> {
	data: T;
	statusCode: number;
	message: string;
}

// Request Interceptor: Add Authorization Header
const requestInterceptor = (config: RequestInit): RequestInit => {
	const token = undefined;
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
};

// Response Interceptor: Handle Errors
const responseInterceptor = async (response: any): Promise<ApiResponse> => {
	if (!response.ok) {
		const errorData = await response.json();

		if (response.statusCode === 401) {
			window.location.href = '/401';
		} else {
			console.error('Error');
		}
		return Promise.reject(errorData);
	}
	return await response.json();
};

// Helper function for making API requests
const apiRequest = async (url: string, config: RequestInit = {}): Promise<ApiResponse> => {
 

	try {
		const finalConfig = requestInterceptor({
			...config,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...config.headers,
			},
		});

		const response = await fetch(`${baseURL}${url}`, finalConfig);
		return responseInterceptor(response as any | ApiResponse);
	} catch (error) {
		console.error('API Request failed:', error);
		return { data: null, statusCode: 500, message: 'Internal Server Error' };
	}
};

// CRUD methods
export const get = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'GET' });
export const post = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'POST', body: JSON.stringify(body) });
export const put = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PUT', body: JSON.stringify(body) });
export const destroy = (url: string, config: RequestInit = {}) => apiRequest(url, { ...config, method: 'DELETE' });
export const patch = (url: string, body: any, config: RequestInit = {}) =>
	apiRequest(url, { ...config, method: 'PATCH', body: JSON.stringify(body) });
