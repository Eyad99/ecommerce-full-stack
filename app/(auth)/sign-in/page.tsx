// import UserButton from '@/components/reusable/user-button';
import { auth } from '@/auth';
import UserButton from '@/components/reusable/user-button';
import React from 'react';

const SignIn = async () => {
	const session = await auth();
	console.log('sessionsession', session);
	return (
		<div>
			<UserButton />
		</div>
	);
};

export default SignIn;
