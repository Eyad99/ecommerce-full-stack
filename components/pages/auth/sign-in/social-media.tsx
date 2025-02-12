'use client';
import { signIn } from 'next-auth/react';
// import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const SignInWithSocialMedia = ({ ...props }: {} & React.ComponentPropsWithRef<typeof Button>) => {
	return (
		<div className='flex justify-center items-center gap-4'>
			<form
				// action={async () => {
				// 	'use server';
				// 	await signIn('github', { callbackUrl: '/' });
				// }}
				action={() => {
					signIn('github', { callbackUrl: '/' });
				}}
			>
				<Button size={'icon'} {...props}>
					<Github />
				</Button>
			</form>
			<form
				// action={async () => {
				// 	'use server';
				// 	await signIn('google', { callbackUrl: '/' });
				// }}
				action={() => {
					signIn('google', { callbackUrl: '/' });
				}}
			>
				<Button size={'icon'} {...props}>
					<Mail />
				</Button>
			</form>
		</div>
	);
};

export default SignInWithSocialMedia;
