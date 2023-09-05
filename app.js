const { Client } = require('pg');

// Create a connection to the PostgreSQL database
const connection = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'maryammehran1',
  database: 'postgres',
  port: 5432, // PostgreSQL default port
});

// Connect to the PostgreSQL server
connection.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Perform your data migration or other database operations here

    // Close the connection when you're done
    connection.end();
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });
