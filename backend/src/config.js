/**
 * This file is a very profesion way I found compiling multiple sources
 * It's optimized for docker and utilize the compose parameters.
 * 
 */

// Constants
module.exports = {
  database: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? process.env.DATABASE_PASSWORD
      : ''
  },
  port: process.env.PORT || 8080
};