'use client';
import * as React from 'react';
import SignInWithSocialMedia from './social-media';
import TextField from '@/components/reusable/fields/text-field';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormState, signInAction } from '@/actions/auth';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from './auth-validation';

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button className='w-full h-11' disabled={pending}>
			{pending ? 'Loading...' : 'Sign In'}
		</Button>
	);
}

const SignIn = () => {
	const initialValues = { email: '', password: '', role: 'customer' };

	const initialState: FormState = {
		errors: {},
	};

	const [state, formAction, isPending] = useActionState(signInAction, initialState);

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger, // To trigger manual validation
	} = useForm({
		resolver: zodResolver(signInSchema),
		defaultValues: initialValues,
	});

	const onSubmit = async (data: any) => {
		// Perform client-side validation
		const result = (await formAction(data)) as any;
		console.log('resultresultresultresultresult', result);
		if (result.errors) {
			// Handle server-side validation errors
		}
	};

	return (
		<section className='flex justify-center items-center h-screen '>
			<Card className='w-[450px] px-10 p-5'>
				<CardHeader>
					<CardTitle>Sign in to your account</CardTitle>
				</CardHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent>
						<div className='flex flex-col gap-4'>
							<TextField
								placeholder='Email'
								label='Email'
								error={errors.email ? true : false}
								helperText={errors.email?.message || state.errors.email}
								{...register('email')}
							/>
							<TextField
								placeholder='Password'
								label='Password'
								type='password'
								icon={{ position: 'right' }}
								error={errors.password ? true : false}
								helperText={errors.password?.message || state.errors.password}
								{...register('password')}
							/>
							<div className='flex flex-col gap-1.5'>
								<Label className='ml-1.5 text-[12px] font-bold capitalize'>Role</Label>
								<Select name='role' defaultValue='customer'>
									<SelectTrigger className=''>
										<SelectValue placeholder='Select Role' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='admin'>Admin</SelectItem>
										<SelectItem value='customer'>Customer</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<SubmitButton />
					</CardFooter>
				</form>
				<div className='px-10 pb-5 text-center'>
					<span>or sign in with</span>
				</div>
				<SignInWithSocialMedia />
			</Card>
		</section>
	);
};
export default SignIn;
