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

function importFromCsv(phoneBook, csv) 
{
	let counter = 0;
	const csvSt = csv.split('\n');

	for (let csvString of csvSt) 
	{
		let Arr = csvString.split(';');
		const phone = Arr[0];
		const name = Arr[1];
		const email = Arr[2];

		if (find(phoneBook, phone).length > 0) 
		{
			if (update(phoneBook, phone, name, email)) 
			{
				counter++;
			}
		} 
		else 
		{
			if (add(phoneBook, phone, name, email)) 
			{
				counter++;
			}
		}
	}

	return counter;
}

module.exports.importFromCsv = importFromCsv;

