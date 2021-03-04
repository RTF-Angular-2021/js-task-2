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

const { add } = require('../../src/task_1/index');
const { update } = require('../../src/task_2/index');

function importFromCsv(phoneBook, csv) {
	let array = [],
			count = 0;
	csv = csv.split('\n');

	for (const element of csv) {
		array.push(element.split(';'))
	};

	array.forEach(element =>{
		if (add(phoneBook, element[0], element[1], element[2]) || update(phoneBook, element[0], element[1], element[2])) {
			count++;
		};
	})
	return count;
}

module.exports.importFromCsv = importFromCsv;
