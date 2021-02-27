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
	let count = 0, 
		arr = csv.split('\n'), 
		newArr = [];
  
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].split(';'));
	}

	for (let j = 0; j < newArr.length; j++) {
		for (let k = 0; k < newArr[j].length; k++) {
			if (!isNaN(newArr[j][0])) {
				let phone = newArr[j][0],
				    name = newArr[j][1],
					email = newArr[j][2];
				if (add(phoneBook, phone, name, email) || update(phoneBook, phone, name, email)) {
					count++;
				}
			}
		}
	}
 	return count;
}

module.exports.importFromCsv = importFromCsv;
