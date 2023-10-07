const knex = require('knex');
const { database } = require('./config');

// I'm using this small file to configure the db connection in case I need to add more stuff.

module.exports = knex({
  client: 'pg',
  connection: database,
});