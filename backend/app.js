const express = require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const DB = require("./dbHandler");
const {fileToDatabase} = require("./fileWorker");
const {userData} = require("./config");

const app = express(); // создание приложения

// allow cors-policy
const corsConfig = {
	credentials: true,
	origin: true,
};
app.use(cors(corsConfig));

app.use(express.json()); // для чтения параметров, передаваемых через post-запросы
app.use(fileUpload()); // for receiving files

app.post("/add", async (request, response) => {

	// проверка, что логин и пароль корректные
	if (request.body.password !== userData.password || request.body.login !== userData.login) {
		return response.status(500).send({
			error: 1,
			text: "Incorrect login or password"
		});
	}

	// если файл не был получен
	if (!request.files || Object.keys(request.files).length === 0) {
		return response.status(400).send('No files were uploaded.');
	}

	let file = request.files.file;
	try {
		await fileToDatabase(file, DB); // сохранение файла в БД
		response.status(200).send({
			error: 0,
			status: "ok",
		});
	} catch (err) {
		console.log(err);
		response.status(500).send(err);
	}
});

app.get("/data", async function (request, response) {
	try {
		const data = await DB.getData();
		response.send({
			error: 0,
			data: data
		});
	} catch (err) {
		response.status(500).send(err);
	}
});

// функция старта приложения
async function start() {
	try {
		await DB.createDBConnection(); // подключение к базе данных
		app.listen(5000); // запуск прослушивания сервера
	} catch (e) {
		console.log(e);
	}
}

start(); // запуск приложения
