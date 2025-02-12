import UserButton from '@/components/widgets/navbar/user-button';
import React from 'react';

const Navbar = async () => {
	return (
		<header className='flex items-center justify-between gap-4 p-4 shadow-md'>
			<h1>ECommerce</h1>
			<div>
				<UserButton />
			</div>
		</header>
	);
};

export default Navbar;
