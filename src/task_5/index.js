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
let { add } = require('../../src/task_1/index');
let { find } = require('../../src/task_3/index');
let { update } = require('../../src/task_2/index');

function importFromCsv(phoneBook, csv) 
{
	let counter = 0;

	const table = csv.split('\n');
	for (let line of table)
	{
		line = line.split(';');
		if (find(phoneBook,line[0],line[1],line[2]).length > 0)
		{
			if(update(phoneBook,line[0],line[1],line[2]))
			{
				counter++;
			}
		}
		else
		{
			if(add(phoneBook,line[0],line[1],line[2]))
			{
				counter++;
			}
		}
	}
	return counter;
}

module.exports.importFromCsv = importFromCsv;

