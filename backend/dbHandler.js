const mysql = require('mysql2/promise');
const {dbConfig} = require('./config');

let DB; // переменная с подключением к БД

exports.tableHeader = ["ddate", "ttime", "number1", "number2", "number3", "number4", "number5"];

exports.createDBConnection = async () => {
	try {
		DB = await mysql.createConnection({
			host: dbConfig.host,
			user: dbConfig.user,
			password: dbConfig.password,
			database: dbConfig.database,
			port: dbConfig.port
		});
		return true;
	}
	catch (err) {
		return false;
	}
}

exports.checkConnection = () => {
	DB.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
	});
};

// вставляет данные в БД
exports.insertOrReplaceData = async ({ddate, ttime, number1, number2, number3, number4, number5}) => {
	console.log(`replace into files values ("${ddate}","${ttime}",${number1},${number2},${number3},${number4},${number5});`)
	await DB.execute(`replace into files values ("${ddate}","${ttime}",${number1},${number2},${number3},${number4},${number5});`);
};

// возвращает данные из БД
exports.getData = async () => {
	const [rows, fields] = await DB.execute(`select * from files;`);
	return rows;
};