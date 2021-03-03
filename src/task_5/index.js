const { add } = require("../task_1");
const { update } = require("../task_2");

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

	let objArray = csv.split('\n');
	let count = 0;

	for (let i in objArray) {

		let valuesArr = objArray[i].split(';');

		if (add(phoneBook,valuesArr[0],valuesArr[1],valuesArr[2]) || update(phoneBook,valuesArr[0],valuesArr[1],valuesArr[2])) {
			count++;
		}
		
	}

	return count;
}

module.exports.importFromCsv = importFromCsv;
