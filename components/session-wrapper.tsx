'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
	/* we use SssionProvider to implement useSession inside client component else when we use ust server component don't need to use SessionProvider  */
	return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
