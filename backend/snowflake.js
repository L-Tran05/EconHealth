const snowflake = require('snowflake-sdk');

const connection = snowflake.createConnection({
  account: process.env.SNOWFLAKE_ACCOUNT,
  username: process.env.SNOWFLAKE_USERNAME,
  password: process.env.SNOWFLAKE_PASSWORD,
  database: process.env.SNOWFLAKE_DATABASE,
  warehouse: process.env.SNOWFLAKE_WAREHOUSE,
  schema: process.env.SNOWFLAKE_SCHEMA
});

function connectToSnowflake() {
  return new Promise((resolve, reject) => {
    connection.connect((err, conn) => {
      if (err) {
        console.error('Unable to connect to Snowflake:', err);
        reject(err);
      } else {
        console.log('✅ Successfully connected to Snowflake');
        resolve(conn);
      }
    });
  });
}

function executeQuery(query, binds = []) {
  return new Promise((resolve, reject) => {
    connection.execute({
      sqlText: query,
      binds: binds,
      complete: (err, stmt, rows) => {
        if (err) {
          console.error('Query execution error:', err);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    });
  });
}

module.exports = { connectToSnowflake, executeQuery, connection };
