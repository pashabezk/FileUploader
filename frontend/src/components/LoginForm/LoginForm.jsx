import React, {useState} from "react";
import styles from "./LoginForm.module.css";
import {postAddData} from "../../api";

const LoginForm = () => {

	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		postAddData(e.target.login.value, e.target.password.value, e.target.file.files[0])
			.catch(reason => setError(reason.response.data));
	};

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit}>
			<label htmlFor="login">Логин</label>
			<input id="login" name="login"/>
			<label htmlFor="password">Пароль</label>
			<input type="password" id="password" name="password"/>
			<input type="file" name="file" accept=".csv"/>
			<button type="submit">Отправить</button>
			{error && JSON.stringify(error)}
		</form>
	);
}

export default LoginForm;
