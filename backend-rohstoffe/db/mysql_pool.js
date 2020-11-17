var mysql = require('mysql');
const util = require('util');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host: "bkutbfulguyqwtduotnp-mysql.services.clever-cloud.com",
  user: "ufjh6yqoec16zsi0",
  password: "VUnBYqzqKAp2mK4RREkU",
  database: "bkutbfulguyqwtduotnp"
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}