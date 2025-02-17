/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const mysql = require('mysql2/promise');

const testDBConnection = async () => {
	try {
		const connection = await mysql.createConnection({
			host: 'eyad.godev.app', // Replace with your actual MySQL host
			user: 'godezazd_ecommerce',
			password: 'ecommerce52125125',
			database: 'godezazd_ecommerce',
			port: 3306,
		});

		console.log(' Connected to the production database successfully!');
		await connection.end();
	} catch (error: any) {
		console.error('Database connection failed:', error.message);
	}
};

testDBConnection();
// host: '68.65.122.60',
// host: '198.54.117.170',
