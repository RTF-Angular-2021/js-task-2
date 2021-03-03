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
const { find } = require('../../src/task_3/index');

function importFromCsv(phoneBook, csv) {
	let updatedAddedCount = 0;
	const csvStrs = csv.split('\n');
	for (let item of csvStrs) {
		let arr = item.split(';');
		const phone = arr[0];
		const name = arr[1];
		const email = arr[2];
		if (find(phoneBook, phone).length > 0 && update(phoneBook, phone, name, email)) {
			updatedAddedCount++;
		} 
		else {
			if (add(phoneBook, phone, name, email)) {
				updatedAddedCount++;
			}
		}
	}
	return updatedAddedCount;
}
module.exports.importFromCsv = importFromCsv;
