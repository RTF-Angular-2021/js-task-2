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
	let number = 0
	let users = []
	for (let i of csv.split('\n')) {
		users.push(i.split(';'))
	}
	for (let k of users) {
		if (k.length === 3) {
			const phone = k[0]
			const name = k[1]
			const email = k[2]
			if (find(phoneBook, phone).length === 0) {
				if (add(phoneBook, phone, name, email))
					number++
			}
			else {
				if (update(phoneBook, phone, name, email))
					number++
			}
		}
	}
	return number
}

module.exports.importFromCsv = importFromCsv;
