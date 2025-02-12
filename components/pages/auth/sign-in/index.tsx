import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import TextField from '@/components/reusable/fields/text-field';
import SignInWithSocialMedia from './social-media';

const SignIn = () => {
	return (
		<section className='flex justify-center items-center h-screen '>
			<Card className='w-[450px] px-10 p-5'>
				<CardHeader>
					<CardTitle>Sign in to your account</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col gap-4'>
						<TextField name='email' placeholder='Email' label='Email' />
						<TextField name='password' placeholder='Password' label='Password' type='password' icon={{ position: 'right' }} />
					</div>
				</CardContent>
				<CardFooter>
					<Button className='w-full h-11'>Sign in</Button>
				</CardFooter>
				<div className='px-10 pb-5 text-center'>
					<span>or sign in with</span>
				</div>
				<SignInWithSocialMedia />
			</Card>
		</section>
	);
};
export default SignIn;
