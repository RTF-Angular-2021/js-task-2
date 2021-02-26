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
	let phones = [];
	csv.split('\n').forEach(value => {
		let user = value.split(';');
		if(user.length != 3) return;
		let phone = user[0];
		let name = user[1];
		let email = user[2];
		if (!phones.find(x => x === phone)) phones.push(phone);
		find(phoneBook, phone).length > 0 
			? update(phoneBook, phone, name, email) 
			: add(phoneBook, phone, name, email);
	})
	return phones.length;
}

module.exports.importFromCsv = importFromCsv;
