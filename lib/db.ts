/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from "mysql2/promise";

let connection: any;

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export const createConnection = async () => {
  if (!connection) {

    // connection = await mysql.createConnection({
    //   host: process.env.MYSQL_HOST,
    //   port: process.env.MYSQL_PORT
    //     ? parseInt(process.env.MYSQL_PORT, 10)
    //     : undefined,
    //   user: process.env.MYSQL_USER,
    //   password: process.env.MYSQL_PASSWORD,
    //   database: process.env.MYSQL_DATABASE,  
    // });

     connection = mysql.createPool(process.env.DATABASE_URL as string);

  }
  return connection;
};
