const csv = require("csvtojson");
const {tableHeader} = require("./dbHandler");
const fs = require("fs");

exports.fileToDatabase = async (file, DB) => {
	const fileName = "./uploads/" + file.name;

	await file.mv(fileName); // сохранение полученного файла

	// чтение csv файла в json массив
	const jsonArray = await csv({
		noheader: true,
		headers: tableHeader
	}).fromFile(fileName);

	// занесение данных в БД
	for (const row of jsonArray) {
		await DB.insertOrReplaceData(row);
	}

	// удаление файла
	fs.unlink(fileName, (err) => {
		if (err) console.log(err);
	});
};