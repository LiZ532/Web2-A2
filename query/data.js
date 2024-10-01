// Import the mysql module to interact with MySQL databases
const mysql = require("mysql");
// Import the database configuration from the config module
const { dbConfig } = require("../utils/config");

// Create a connection pool using the provided database configuration
var poolConnect = mysql.createPool(dbConfig);

// Export a function to get data from the database
exports.getData = function (sql, callback) {
    // Retrieve a connection from the pool
    poolConnect.getConnection(function (errdata, connection) {
        // Check if there was an error while getting the connection
        if (errdata) {
            console.error("Error getting connection:", errdata);
            return callback(errdata, null); // Return the error via the callback
        }

        // Execute the SQL query passed as an argument
        connection.query(sql, function (err, rows) {
            // Check if there was an error during the query execution
            if (err) {
                console.log("Error executing query:", err);
            }
            // Call the callback function with the error (if any) and the retrieved rows
            callback(err, rows);

            // Release the connection back to the pool for reuse
            connection.release();
        });
    });
}

