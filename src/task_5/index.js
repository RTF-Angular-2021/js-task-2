const { Contact } = require('../../src/task_1/index');
const { add } = require('../../src/task_1/index');
const { update } = require('../../src/task_2/index');
const { find } = require('../../src/task_3/index');
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
	let lines = csv.split('\n');
	for(const line of lines){
		let pne = line.split(';');
		if(add(phoneBook, pne[0], pne[1], pne[2])){
			count = count + 1;
		}
		else if (update(phoneBook, pne[0], pne[1], pne[2])){
			count = count + 1;
		}
	}
	return count;
}

module.exports.importFromCsv = importFromCsv;
