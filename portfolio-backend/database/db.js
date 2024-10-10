import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'portfolio',
});

const connectToDatabase = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the MySQL database.');
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
};

connectToDatabase();

export default pool;