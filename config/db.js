// const env = process.env.NODE_ENV; //  环境参数
// // MYSQL_CONF
let MongoDB_CONF;
// let REDIS_CONF;
// if (env === "dev") {
// 	// mysql
// 	MYSQL_CONF = {
// 		host: 'localhost',
// 		user: 'root',
// 		password: '11111111',
// 		port: '3306',
// 		database: 'myblog',
// 	},
// 		// redis
// 		REDIS_CONF = {
// 			port: '6379',
// 			host: '127.0.0.1'
// 		}
// }
// if (env === "production") {
// 	// mysql
// 	MYSQL_CONF = {
// 		host: 'localhost',
// 		user: 'root',
// 		password: '11111111',
// 		port: '3306',
// 		database: 'myblog',
// 	},
// 		// redis
// 		REDIS_CONF = {
// 			port: '6379',
// 			host: '127.0.0.1'
// 		}
// }

MongoDB_CONF ={
   host: 'localhost',
	user: 'root',
    password: '11111111',
    port: '3306',
    database: 'myblog',
}

module.exports = {
	MongoDB_CONF,
}