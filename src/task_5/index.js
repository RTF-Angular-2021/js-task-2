const { add } = require("../task_1");
const { update } = require("../task_2");
const { find } = require("../task_3");

/** Задача 2 - Функция importFromCsv
Требуется написать функцию importFromCsv, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Строку в формате csv
требуется:
в текущем состоянии телефонной книги обновить записи или добавить их в зависимости от того, существуют они или нет
возвращает:
	Число обновленных и добавленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} csv Csv строка, описывающая таблицу, формата name;phone;email
@returns {number} Количество добавленных и обновленных записей
 */
function importFromCsv(phoneBook, csv) {
	let count = 0;
	csv.split('\n').forEach(value => {
		let user = value.split(';');
		const phone = user[0];
		const name = user[1];
		const email = user[2];
		find(phoneBook, phone).length > 0 
			? update(phoneBook, phone, name, email) ? count++ : '' 
			: add(phoneBook, phone, name, email) ? count++ : '' ;
	});
	return count;
}

module.exports.importFromCsv = importFromCsv;
