import React, {useState} from "react";
import styles from "./DataView.module.css";
import {getData} from "../../api";

const TableData = ({data, onUpdateClick}) => {

	const rows = data.map(row => (
		<tr key={row.ddate + row.ttime}>
			<td>{row.ddate}</td>
			<td>{row.ttime}</td>
			<td>{row.number1}</td>
			<td>{row.number2}</td>
			<td>{row.number3}</td>
			<td>{row.number4}</td>
			<td>{row.number5}</td>
		</tr>
	));

	return (
		<table className={styles.table}>
			<caption>Данные из БД
				<button type="button" onClick={onUpdateClick}>Обновить</button>
			</caption>
			<thead>
			<tr>
				<th scope="col">Дата</th>
				<th scope="col">Время</th>
				<th scope="col">Число</th>
				<th scope="col">Число</th>
				<th scope="col">Число</th>
				<th scope="col">Число</th>
				<th scope="col">Число</th>
			</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

const DataView = () => {

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	const onUpdateClick = async () => {
		setError(null);
		getData()
			.then(response => {
				if(response.data.data && response.data.data.length > 0)
					setData(response.data.data);
				else setError("Данных в БД нет");
			})
			.catch(reason => setError(reason));
	}

	return (
		<div className={styles.wrapper}>

			{
				data && data.length > 0
					? <TableData data={data} onUpdateClick={onUpdateClick}/>
					: <button type="button" onClick={onUpdateClick}>Подгрузить данные</button>
			}
			{error && JSON.stringify(error)}
		</div>
	);
}

export default DataView;
